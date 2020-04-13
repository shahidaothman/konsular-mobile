import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expantable1Page } from './expantable1.page';

describe('Expantable1Page', () => {
  let component: Expantable1Page;
  let fixture: ComponentFixture<Expantable1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expantable1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expantable1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
