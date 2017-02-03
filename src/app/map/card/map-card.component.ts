import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
