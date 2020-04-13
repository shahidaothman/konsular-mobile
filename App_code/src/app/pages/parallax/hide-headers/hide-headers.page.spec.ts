import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideHeadersPage } from './hide-headers.page';

describe('HideHeadersPage', () => {
  let component: HideHeadersPage;
  let fixture: ComponentFixture<HideHeadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideHeadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideHeadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
