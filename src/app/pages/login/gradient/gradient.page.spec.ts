import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientPage } from './gradient.page';

describe('GradientPage', () => {
  let component: GradientPage;
  let fixture: ComponentFixture<GradientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
