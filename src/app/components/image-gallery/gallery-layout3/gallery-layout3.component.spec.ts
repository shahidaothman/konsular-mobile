import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayout3Component } from './gallery-layout3.component';

describe('GalleryLayout3Component', () => {
  let component: GalleryLayout3Component;
  let fixture: ComponentFixture<GalleryLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLayout3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
