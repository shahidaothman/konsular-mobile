import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayout5Component } from './profile-layout5.component';

describe('ProfileLayout5Component', () => {
  let component: ProfileLayout5Component;
  let fixture: ComponentFixture<ProfileLayout5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLayout5Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayout5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
