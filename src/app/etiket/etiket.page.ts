import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-etiket',
  templateUrl: './etiket.page.html',
  styleUrls: ['./etiket.page.scss'],
})
export class EtiketPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  booking(){
    this.navCtrl.navigateForward('/tabs/booking');
  }

}
