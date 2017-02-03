import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-conversion-detail',
  templateUrl: './conversion-detail.component.html',
  styleUrls: ['./conversion-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
