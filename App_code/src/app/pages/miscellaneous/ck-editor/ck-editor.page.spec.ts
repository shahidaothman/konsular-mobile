import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkEditorPage } from './ck-editor.page';

describe('CkEditorPage', () => {
  let component: CkEditorPage;
  let fixture: ComponentFixture<CkEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkEditorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
