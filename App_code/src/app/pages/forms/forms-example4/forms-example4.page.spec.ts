import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample4Page } from './forms-example4.page';

describe('FormsExample4Page', () => {
  let component: FormsExample4Page;
  let fixture: ComponentFixture<FormsExample4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
