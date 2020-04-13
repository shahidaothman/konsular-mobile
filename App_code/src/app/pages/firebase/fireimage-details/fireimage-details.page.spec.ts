 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireimageDetailsPage } from './fireimage-details.page';

describe('FireimageDetailsPage', () => {
  let component: FireimageDetailsPage;
  let fixture: ComponentFixture<FireimageDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FireimageDetailsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireimageDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
