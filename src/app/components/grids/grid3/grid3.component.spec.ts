import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid3Component } from './grid3.component';

describe('Grid3Component', () => {
  let component: Grid3Component;
  let fixture: ComponentFixture<Grid3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
