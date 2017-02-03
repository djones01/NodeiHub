import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionRoutingModule } from './conversion-routing.module';

import { ConversionEditComponent } from './edit/conversion-edit.component';
import { ConversionListComponent } from './list/conversion-list.component';
import { ConversionCardComponent } from './card/conversion-card.component';
import { ConversionDetailComponent } from './detail/conversion-detail.component';
import { ConversionComponent } from './conversion.component';

@NgModule({
  imports: [
    CommonModule,
    ConversionRoutingModule
  ],
  declarations: [
    ConversionCardComponent,
    ConversionDetailComponent,
    ConversionEditComponent,
    ConversionListComponent,
    ConversionComponent
  ]
})
export class ConversionModule { }
