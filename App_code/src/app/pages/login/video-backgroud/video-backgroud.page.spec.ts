import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBackgroudPage } from './video-backgroud.page';

describe('VideoBackgroudPage', () => {
  let component: VideoBackgroudPage;
  let fixture: ComponentFixture<VideoBackgroudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBackgroudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBackgroudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
