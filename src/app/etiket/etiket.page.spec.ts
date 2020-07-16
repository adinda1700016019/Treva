import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtiketPage } from './etiket.page';

describe('EtiketPage', () => {
  let component: EtiketPage;
  let fixture: ComponentFixture<EtiketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
