import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';

import { ProjectEditComponent } from './edit/project-edit.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectCardComponent } from './card/project-card.component';
import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent
  ]
})
export class ProjectModule { }
