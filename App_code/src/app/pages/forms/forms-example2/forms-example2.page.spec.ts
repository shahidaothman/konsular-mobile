import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample2Page } from './forms-example2.page';

describe('FormsExample2Page', () => {
  let component: FormsExample2Page;
  let fixture: ComponentFixture<FormsExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
