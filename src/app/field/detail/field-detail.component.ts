import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
