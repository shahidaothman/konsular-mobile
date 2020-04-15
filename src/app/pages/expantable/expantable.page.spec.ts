import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpantablePage } from './expantable.page';

describe('ExpantablePage', () => {
  let component: ExpantablePage;
  let fixture: ComponentFixture<ExpantablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpantablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpantablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
