import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldRoutingModule } from './field-routing.module';

import { FieldEditComponent } from './edit/field-edit.component';
import { FieldListComponent } from './list/field-list.component';
import { FieldDetailComponent } from './detail/field-detail.component';
import { FieldComponent } from './field.component';

@NgModule({
  imports: [
    CommonModule,
    FieldRoutingModule
  ],
  declarations: [
    FieldDetailComponent,
    FieldEditComponent,
    FieldListComponent,
    FieldComponent
  ]
})
export class FieldModule { }
