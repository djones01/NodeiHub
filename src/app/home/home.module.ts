import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';

// third party imports
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PanelMenuModule,
    SidebarModule,
    SharedModule
  ],
  declarations: [HomeComponent, AboutComponent, OverviewComponent]
})
export class HomeModule { }
