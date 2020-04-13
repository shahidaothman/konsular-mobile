 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireimageCreatePage } from './fireimage-create.page';

describe('FireimageCreatePage', () => {
  let component: FireimageCreatePage;
  let fixture: ComponentFixture<FireimageCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FireimageCreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireimageCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
