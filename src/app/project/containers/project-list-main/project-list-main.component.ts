import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store/index';
import { Project } from '../../../store/models/project';

@Component({
  selector: 'app-project-list-main',
  templateUrl: './project-list-main.component.html',
  styleUrls: ['./project-list-main.component.scss']
})
export class ProjectListMainComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.projects$ = this.store.select('projects');
  }

}
