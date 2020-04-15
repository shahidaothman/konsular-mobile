 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredetailsPage } from './firedetails.page';

describe('FiredetailsPage', () => {
  let component: FiredetailsPage;
  let fixture: ComponentFixture<FiredetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiredetailsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiredetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
