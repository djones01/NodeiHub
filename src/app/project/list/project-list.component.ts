import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
    @Input() data: any[];
    @Output() selectedItem = new EventEmitter();

    private brands = [
      { label: 'All Types', value: null },
      { label: 'Upgrade', value: 'upgrade' },
      { label: 'Enhancement', value: 'enhancement' },
      { label: 'New Installation', value: 'new' },
      { label: 'Retrofit', value: 'retrofit' }
    ];
}
