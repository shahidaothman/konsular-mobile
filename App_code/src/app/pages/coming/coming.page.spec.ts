import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingPage } from './coming.page';

describe('ComingPage', () => {
  let component: ComingPage;
  let fixture: ComponentFixture<ComingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
