import { NgModule } from '@angular/core';

// Primeng module imports 
import { CalendarModule, DataTableModule, DialogModule, ConfirmDialogModule, ConfirmationService, PanelModule, MenuModule } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

import { ModalComponent, ModalDirectivesDirective } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { NotesComponent } from './notes/notes.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ModalComponent,
    MainNavigationComponent,
    SubNavigationComponent,
    ModalDirectivesDirective,
    CardComponent,
    ButtonComponent,
    LoaderComponent,
    InputComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule, 
    DataTableModule,
    DialogModule, 
    ConfirmDialogModule,
    PanelModule,
    MenuModule,
    SidebarModule
  ],
  exports: [
    ModalComponent,
    ModalDirectivesDirective,
    MainNavigationComponent,
    LoaderComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    SubNavigationComponent,
    NotesComponent
  ],
  providers: [ConfirmationService]
})
export class SharedModule {}
