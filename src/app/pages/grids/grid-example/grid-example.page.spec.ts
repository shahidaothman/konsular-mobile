import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExamplePage } from './grid-example.page';

describe('GridExamplePage', () => {
  let component: GridExamplePage;
  let fixture: ComponentFixture<GridExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
