 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirecreatePage } from './firecreate.page';

describe('FirecreatePage', () => {
  let component: FirecreatePage;
  let fixture: ComponentFixture<FirecreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirecreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirecreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
