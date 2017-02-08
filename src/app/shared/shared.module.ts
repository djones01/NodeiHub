import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    MainNavigationComponent,
    SubNavigationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    MenuModule
  ],
  exports: [
    MainNavigationComponent,
    LoaderComponent,
    SubNavigationComponent
  ]
})
export class SharedModule {}
