import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationRoutingModule } from './integration-routing.module';

import { IntegrationEditComponent } from './edit/integration-edit.component';
import { IntegrationListComponent } from './list/integration-list.component';
import { IntegrationCardComponent } from './card/integration-card.component';
import { IntegrationDetailComponent } from './detail/integration-detail.component';
import { IntegrationComponent } from './integration.component';

@NgModule({
  imports: [
    CommonModule,
    IntegrationRoutingModule
  ],
  declarations: [
    IntegrationCardComponent,
    IntegrationDetailComponent,
    IntegrationEditComponent,
    IntegrationListComponent,
    IntegrationComponent
  ]
})
export class IntegrationModule { }
