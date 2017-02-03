import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProjectEditComponent } from './edit/project-edit.component';

const routes: Route[] = [
  {
    path: '', component: ProjectEditComponent
  },
  {
    path: 'edit', component: ProjectEditComponent, outlet: 'modal'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectRoutingModule { }