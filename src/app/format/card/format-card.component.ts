import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-format-card',
  templateUrl: './format-card.component.html',
  styleUrls: ['./format-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
