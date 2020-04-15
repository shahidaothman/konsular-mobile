import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImagePage } from './header-image.page';

describe('HeaderImagePage', () => {
  let component: HeaderImagePage;
  let fixture: ComponentFixture<HeaderImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
