import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProjectEditMainComponent } from './containers/project-edit-main/project-edit-main.component';
import { ProjectComponent } from './project.component';

const routes: Route[] = [
  {
    path: '', component: ProjectComponent
  },
  { path: 'edit', component: ProjectEditMainComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectRoutingModule { }