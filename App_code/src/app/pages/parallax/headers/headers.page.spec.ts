import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersPage } from './headers.page';

describe('HeadersPage', () => {
  let component: HeadersPage;
  let fixture: ComponentFixture<HeadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
