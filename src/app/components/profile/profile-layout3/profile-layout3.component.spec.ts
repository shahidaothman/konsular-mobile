import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout3Component } from './profile-layout3.component';

describe('ProfileLayout3Component', () => {
  let component: ProfileLayout3Component;
  let fixture: ComponentFixture<ProfileLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLayout3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
