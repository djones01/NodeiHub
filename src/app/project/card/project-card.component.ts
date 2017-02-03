import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  encapsulation: ViewEncapsulation.null,
  changeDetection: ChangeDetectionStrategy.null
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
