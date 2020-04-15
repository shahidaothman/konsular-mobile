import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayout1Page } from './gallery-layout1.page';

describe('GalleryLayout1Page', () => {
  let component: GalleryLayout1Page;
  let fixture: ComponentFixture<GalleryLayout1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLayout1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLayout1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
