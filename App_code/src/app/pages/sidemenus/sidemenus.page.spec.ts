import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenusPage } from './sidemenus.page';

describe('SidemenusPage', () => {
  let component: SidemenusPage;
  let fixture: ComponentFixture<SidemenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
