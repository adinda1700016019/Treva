import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pesan',
  templateUrl: './pesan.page.html',
  styleUrls: ['./pesan.page.scss'],
})
export class PesanPage implements OnInit {
  
  adultInput;
  childInput;

  constructor(
    private navCtrl: NavController
  ) { 

  }

  ngOnInit() {
  }

  diskripsi(){
    this.navCtrl.navigateForward('/diskripsi');
  }

  detail(){
    this.navCtrl.navigateForward('/detail');
  }

}
