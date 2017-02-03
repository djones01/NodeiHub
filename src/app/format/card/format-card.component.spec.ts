/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormatCardComponent } from './format-card.component';

describe('FormatCardComponent', () => {
  let component: FormatCardComponent;
  let fixture: ComponentFixture<FormatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
