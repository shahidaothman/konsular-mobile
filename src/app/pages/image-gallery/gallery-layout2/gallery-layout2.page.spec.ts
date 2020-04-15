import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayout2Page } from './gallery-layout2.page';

describe('GalleryLayout2Page', () => {
  let component: GalleryLayout2Page;
  let fixture: ComponentFixture<GalleryLayout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLayout2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLayout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
