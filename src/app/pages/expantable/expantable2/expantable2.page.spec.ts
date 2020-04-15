import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expantable2Page } from './expantable2.page';

describe('Expantable2Page', () => {
  let component: Expantable2Page;
  let fixture: ComponentFixture<Expantable2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expantable2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expantable2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
