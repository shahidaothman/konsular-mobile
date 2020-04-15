import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearConsularMapPage } from './near-consular-map.page';

describe('NearConsularMapPage', () => {
  let component: NearConsularMapPage;
  let fixture: ComponentFixture<NearConsularMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearConsularMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearConsularMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
