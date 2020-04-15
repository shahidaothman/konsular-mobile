import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchHeaderPage } from './stretch-header.page';

describe('StretchHeaderPage', () => {
  let component: StretchHeaderPage;
  let fixture: ComponentFixture<StretchHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StretchHeaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
