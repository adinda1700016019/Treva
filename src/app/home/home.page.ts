import { Component, OnInit } from '@angular/core';
import { TravelPage } from '../travel/travel.page';
import { DiskripsiPage } from '../diskripsi/diskripsi.page';
import { RutePage } from '../rute/rute.page';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop: true,
    delay: 10000,
    speed: 300
  };


  userEmail: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {}

  ngOnInit(){
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }

  travel(){
    this.navCtrl.navigateForward('/travel');
  }

  diskripsi(){
    this.navCtrl.navigateForward('/diskripsi');
  }

  rute(){
    this.navCtrl.navigateForward('/rute');
  }


}
