import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorMessageComponent } from './error-message/error-message.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';



@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularMaterialModule
  ],
  exports:[
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
