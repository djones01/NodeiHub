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
        { path: 'about', component: AboutComponent },
        { path: 'projects', loadChildren: 'app/project/project.module#ProjectModule' },
        { path: 'integrations', loadChildren: 'app/integration/integration.module#IntegrationModule' },
        { path: 'conversions', loadChildren: 'app/conversion/conversion.module#ConversionModule' },
        { path: 'formats', loadChildren: 'app/format/format.module#FormatModule' }
    ]}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
