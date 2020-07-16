import { Component, OnInit } from '@angular/core';
import { TravelPage } from '../travel/travel.page';
import { PesanPage } from '../pesan/pesan.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diskripsi',
  templateUrl: './diskripsi.page.html',
  styleUrls: ['./diskripsi.page.scss'],
})
export class DiskripsiPage implements OnInit {

  jsonData1: any;
  jsonData2: any;

  constructor(
    private navCtrl: NavController
  ) {
    this.initializaJSONData1();
    this.initializaJSONData2();
   }

  initializaJSONData1()
  {
    this.jsonData1 = [
      {
        "age": "Adult",
        "day": "Monday-Friday",
        "price": "Rp 90.000",
        "id": 1
      },
      {
        "age": "Child",
        "day": "Monday-Friday",
        "price": "Rp 60.000",
        "id": 2
      }
    ];
  }

  initializaJSONData2()
  {
    this.jsonData2 = [
      {
        "age": "Adult",
        "day": "Saturday-Sunday",
        "price": "Rp 100.000"
      },
      {
        "age": "Child",
        "day": "Saturday-Sunday",
        "price": "Rp 70.000"
      }
    ];
  }

  ngOnInit() {
  }

  travel(){
    this.navCtrl.navigateForward('/travel');
  }

  pesan(){
    this.navCtrl.navigateForward('/pesan');
  }


}
