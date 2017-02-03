import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
