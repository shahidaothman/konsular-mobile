import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLayout3Page } from './gallery-layout3.page';

describe('GalleryLayout3Page', () => {
  let component: GalleryLayout3Page;
  let fixture: ComponentFixture<GalleryLayout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLayout3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLayout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
