import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';

import { MapEditComponent } from './edit/map-edit.component';
import { MapListComponent } from './list/map-list.component';
import { MapCardComponent } from './card/map-card.component';
import { MapDetailComponent } from './detail/map-detail.component';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  declarations: [
    MapCardComponent,
    MapDetailComponent,
    MapEditComponent,
    MapListComponent,
    MapComponent
  ]
})
export class MapModule { }
