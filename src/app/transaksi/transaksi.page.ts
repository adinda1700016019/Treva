import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  paymentdetail(){
    this.navCtrl.navigateForward('/paymentdetail');
  }

  home(){
    this.navCtrl.navigateForward('/tabs/home');
  }

}
