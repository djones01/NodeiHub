import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatRoutingModule } from './format-routing.module';

import { FormatEditComponent } from './edit/format-edit.component';
import { FormatListComponent } from './list/format-list.component';
import { FormatCardComponent } from './card/format-card.component';
import { FormatDetailComponent } from './detail/format-detail.component';
import { FormatComponent } from './format.component';

@NgModule({
  imports: [
    CommonModule,
    FormatRoutingModule
  ],
  declarations: [
    FormatCardComponent,
    FormatDetailComponent,
    FormatEditComponent,
    FormatListComponent,
    FormatComponent
  ]
})
export class FormatModule { }
