import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-conversion-list',
  templateUrl: './conversion-list.component.html',
  styleUrls: ['./conversion-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
