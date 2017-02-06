import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectEditComponent implements OnInit {
  public projectForm: FormGroup;

  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      name: ['',Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

}
