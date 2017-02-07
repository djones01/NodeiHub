import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from './project-routing.module';

// Primeng module imports 
import { CalendarModule, DataTableModule, DialogModule, ConfirmDialogModule, ConfirmationService, PanelModule, DropdownModule } from 'primeng/primeng';

import { ProjectEditComponent } from './edit/project-edit.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectCardComponent } from './card/project-card.component';
import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectComponent } from './project.component';

// Containers
import { ProjectEditMainComponent } from './containers/project-edit-main/project-edit-main.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    DropdownModule
  ],
  declarations: [
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectComponent,
    ProjectEditMainComponent
  ]
})
export class ProjectModule { }
