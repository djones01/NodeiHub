import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-edit-main',
  templateUrl: './project-edit-main.component.html',
  styleUrls: ['./project-edit-main.component.scss']
})
export class ProjectEditMainComponent implements OnInit {
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
