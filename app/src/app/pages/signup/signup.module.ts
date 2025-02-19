/* --- PAGES --- */
import { SignUpPage } from './signup.page';

/* --- MODULES --- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatContentModule } from 'src/app/libs/mat-content/mat-content.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: SignUpPage
	}
];

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatContentModule,
		FlexLayoutModule,
		MatCheckboxModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatProgressBarModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		SignUpPage
	]
})

export class SignUpPageModule { }
