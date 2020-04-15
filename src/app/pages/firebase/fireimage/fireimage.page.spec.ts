 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireimagePage } from './fireimage.page';

describe('FireimagePage', () => {
  let component: FireimagePage;
  let fixture: ComponentFixture<FireimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FireimagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
