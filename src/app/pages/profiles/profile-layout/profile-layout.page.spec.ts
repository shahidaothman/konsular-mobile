import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLayoutPage } from './profile-layout.page';

describe('ProfileLayoutPage', () => {
  let component: ProfileLayoutPage;
  let fixture: ComponentFixture<ProfileLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
