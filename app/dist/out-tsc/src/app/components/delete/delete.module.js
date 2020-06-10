import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DeleteComponent } from './delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let DeleteModule = class DeleteModule {
};
DeleteModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            CommonModule,
            MatIconModule,
            MatSelectModule,
            MatDialogModule,
            MatButtonModule,
            MatToolbarModule,
            MatFormFieldModule,
            ReactiveFormsModule
        ],
        declarations: [DeleteComponent]
    })
], DeleteModule);
export { DeleteModule };
//# sourceMappingURL=delete.module.js.map