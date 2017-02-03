import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-conversion-card',
  templateUrl: './conversion-card.component.html',
  styleUrls: ['./conversion-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
