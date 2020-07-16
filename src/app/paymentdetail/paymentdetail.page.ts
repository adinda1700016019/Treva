import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymentdetail',
  templateUrl: './paymentdetail.page.html',
  styleUrls: ['./paymentdetail.page.scss'],
})
export class PaymentdetailPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  payment(){
    this.navCtrl.navigateForward('/payment');
  }

  transaksi(){
    this.navCtrl.navigateForward('/transaksi');
  }

}
