import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid5Component } from './grid5.component';

describe('Grid5Component', () => {
  let component: Grid5Component;
  let fixture: ComponentFixture<Grid5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid5Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
