import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-integration-list',
  templateUrl: './integration-list.component.html',
  styleUrls: ['./integration-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
