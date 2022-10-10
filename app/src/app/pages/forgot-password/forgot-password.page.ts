import { AppsService } from 'src/app/services/apps/apps.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { AccountService } from 'src/app/services/account/account.service';
import { FormErrorService } from 'src/app/services/form-error/form-error.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'forgot-password-page',
	styleUrls: ['./forgot-password.page.scss'],
	templateUrl: './forgot-password.page.html'
})

export class ForgotPasswordPage implements OnInit, OnDestroy {

	constructor(private apps: AppsService, private toast: ToastService, private route: ActivatedRoute, private config: ConfigService, private router: Router, private service: AccountService, private formerror: FormErrorService) { }

	public app: any = { };
	public form: FormGroup = new FormGroup({
		email: new FormControl(null, [Validators.email, Validators.required])
	});
	public appId: string;
	public errors: any = {
		email: ''
	};
	public loading: boolean;
	private subscriptions: any = {};

	private async load() {
		this.loading = true;

		const response = await this.apps.load({
			filter: [
				'url',
				'icon',
				'name'
			],
			appId: this.appId
		});

		this.loading = false;

		if (response.ok) {
			this.app = response.result;
			if (!this.form.invalid) {
				this.submit();
			}
		} else {
			this.toast.show('Issue loading app!');
		}
	}

	public async submit() {
		this.loading = true;

		const response = await this.service.resetpassword({
			email: this.form.value.email
		});

		if (response.ok) {
			const params = this.route.snapshot.queryParams;
			if (Object.keys(this.app).includes('url')) {
				this.router.navigate(['/allow-access'], {
					queryParams: {
						appId: params.appId,
						email: params.email,
						returl: this.app.url + '/authenticate'
					},
					replaceUrl: true
				});
			} else {
				this.router.navigate(['/signin'], {
					queryParams: {
						email: params.email
					},
					replaceUrl: true
				});
				this.toast.show("Verification sent to the specified email address");
			}
		} else {
			this.toast.show(response.error.message);
		}

		this.loading = false;
	}

	ngOnInit(): void {
		this.subscriptions.form = this.form.valueChanges.subscribe(data => {
			this.errors = this.formerror.validateForm(this.form, this.errors, true);
		});

		this.subscriptions.loaded = this.config.loaded.subscribe(loaded => {
			if (loaded) {
				const params = this.route.snapshot.queryParams;
				if (typeof (params.code) != 'undefined' && params.code !== null) {
					this.form.controls.code.setValue(params.code);
				}
				if (typeof (params.email) != 'undefined' && params.email !== null) {
					this.form.controls.email.setValue(params.email);
				}
				if (typeof(params.appId) != 'undefined' && params.appId !== null) {
					this.appId = params.appId;
					this.load();
				} else if (!this.form.invalid) {
					this.submit();
				}
			}
		});
	}

	ngOnDestroy(): void {
		this.subscriptions.form.unsubscribe();
		this.subscriptions.loaded.unsubscribe();
	}

}
