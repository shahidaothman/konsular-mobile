import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationMalaysianPage } from './information-malaysian.page';

describe('InformationMalaysianPage', () => {
  let component: InformationMalaysianPage;
  let fixture: ComponentFixture<InformationMalaysianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformationMalaysianPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationMalaysianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
