import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../detail/detail.page';
import { PesanPage } from '../pesan/pesan.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  pesan(){
    this.navCtrl.navigateForward('/pesan');
  }

  detail(){
    this.navCtrl.navigateForward('/detail');
  }

  paymentdetail(){
    this.navCtrl.navigateForward('/paymentdetail');
  }

}
