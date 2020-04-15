import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadPage } from './abroad.page';

describe('AbroadPage', () => {
  let component: AbroadPage;
  let fixture: ComponentFixture<AbroadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
