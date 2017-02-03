import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-integration-edit',
  templateUrl: './integration-edit.component.html',
  styleUrls: ['./integration-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrationEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
