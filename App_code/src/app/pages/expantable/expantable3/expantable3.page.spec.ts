import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expantable3Page } from './expantable3.page';

describe('Expantable3Page', () => {
  let component: Expantable3Page;
  let fixture: ComponentFixture<Expantable3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expantable3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expantable3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
