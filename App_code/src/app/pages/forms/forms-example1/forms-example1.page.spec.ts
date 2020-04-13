import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample1Page } from './forms-example1.page';

describe('FormsExample1Page', () => {
  let component: FormsExample1Page;
  let fixture: ComponentFixture<FormsExample1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
