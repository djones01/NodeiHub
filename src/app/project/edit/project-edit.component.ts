import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent {
  @Input()
  public form: FormGroup;
  @Input()
  set data(v) {
    if (v) {
      this.form.patchValue(v);
    }
  };
  @Output() submitted = new EventEmitter();
  onSubmit(v: any){
    this.submitted.emit(v);
  }
}
