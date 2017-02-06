import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full'},
    { path: 'pages', component: HomeComponent, children: [
        { path: '', redirectTo: 'overview', pathMatch: 'full' },
        { path: 'overview', component: OverviewComponent },
        { path: 'about', component: AboutComponent }
    ]}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
