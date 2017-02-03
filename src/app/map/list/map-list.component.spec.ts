/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapListComponent } from './map-list.component';

describe('MapListComponent', () => {
  let component: MapListComponent;
  let fixture: ComponentFixture<MapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
