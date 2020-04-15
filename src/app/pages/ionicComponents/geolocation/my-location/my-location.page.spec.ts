import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLocationPage } from './my-location.page';

describe('MyLocationPage', () => {
  let component: MyLocationPage;
  let fixture: ComponentFixture<MyLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
