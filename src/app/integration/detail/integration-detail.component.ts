import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-integration-detail',
  templateUrl: './integration-detail.component.html',
  styleUrls: ['./integration-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
