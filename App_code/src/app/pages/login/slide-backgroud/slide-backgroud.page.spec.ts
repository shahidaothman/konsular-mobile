import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBackgroudPage } from './slide-backgroud.page';

describe('SlideBackgroudPage', () => {
  let component: SlideBackgroudPage;
  let fixture: ComponentFixture<SlideBackgroudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBackgroudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBackgroudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
