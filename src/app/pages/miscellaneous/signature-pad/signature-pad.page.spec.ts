import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturePadPage } from './signature-pad.page';

describe('SignaturePadPage', () => {
  let component: SignaturePadPage;
  let fixture: ComponentFixture<SignaturePadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturePadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaturePadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
