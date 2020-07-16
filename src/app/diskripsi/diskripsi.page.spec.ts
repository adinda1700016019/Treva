import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiskripsiPage } from './diskripsi.page';

describe('DiskripsiPage', () => {
  let component: DiskripsiPage;
  let fixture: ComponentFixture<DiskripsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskripsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiskripsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
