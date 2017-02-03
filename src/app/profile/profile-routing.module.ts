import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { EditComponent } from './edit/edit.component';

const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    outlet: 'modal'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProfileRoutingModule { }
