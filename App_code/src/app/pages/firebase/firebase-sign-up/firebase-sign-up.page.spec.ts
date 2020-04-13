
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseSignUpPage } from './firebase-sign-up.page';

describe('FirebaseSignUpPage', () => {
  let component: FirebaseSignUpPage;
  let fixture: ComponentFixture<FirebaseSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseSignUpPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
