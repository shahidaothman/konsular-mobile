import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLocationMapPage } from './my-location-map.page';

describe('MyLocationMapPage', () => {
  let component: MyLocationMapPage;
  let fixture: ComponentFixture<MyLocationMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLocationMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLocationMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
