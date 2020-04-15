import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturePickerPage } from './signature-picker.page';

describe('SignaturePickerPage', () => {
  let component: SignaturePickerPage;
  let fixture: ComponentFixture<SignaturePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturePickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
