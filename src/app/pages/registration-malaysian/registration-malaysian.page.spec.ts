import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrationMalaysianPage } from './registration-malaysian.page';

describe('RegistrationMalaysianPage', () => {
  let component: RegistrationMalaysianPage;
  let fixture: ComponentFixture<RegistrationMalaysianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationMalaysianPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationMalaysianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
