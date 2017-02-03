import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-integration-card',
  templateUrl: './integration-card.component.html',
  styleUrls: ['./integration-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
