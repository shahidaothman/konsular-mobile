 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaselistPage } from './firebaselist.page';

describe('FirebaselistPage', () => {
  let component: FirebaselistPage;
  let fixture: ComponentFixture<FirebaselistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaselistPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaselistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
