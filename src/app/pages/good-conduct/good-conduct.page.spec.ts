import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodConductPage } from './good-conduct.page';

describe('GoodConductPage', () => {
  let component: GoodConductPage;
  let fixture: ComponentFixture<GoodConductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoodConductPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodConductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
