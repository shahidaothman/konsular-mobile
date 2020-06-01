import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsularAssistancePage } from './consular-assistance.page';

describe('ConsularAssistancePage', () => {
  let component: ConsularAssistancePage;
  let fixture: ComponentFixture<ConsularAssistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsularAssistancePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsularAssistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
