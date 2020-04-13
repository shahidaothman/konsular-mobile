import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayout2Component } from './gallery-layout2.component';

describe('GalleryLayout2Component', () => {
  let component: GalleryLayout2Component;
  let fixture: ComponentFixture<GalleryLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLayout2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
