import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
