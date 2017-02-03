/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormatListComponent } from './format-list.component';

describe('FormatListComponent', () => {
  let component: FormatListComponent;
  let fixture: ComponentFixture<FormatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
