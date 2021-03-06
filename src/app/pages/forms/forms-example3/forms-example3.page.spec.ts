import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExample3Page } from './forms-example3.page';

describe('FormsExample3Page', () => {
  let component: FormsExample3Page;
  let fixture: ComponentFixture<FormsExample3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExample3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExample3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
