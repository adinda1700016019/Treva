import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccountPage } from '../account/account.page';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

userEmail: string;

  constructor(
  private navCtrl: NavController,
  private authService: AuthenticateService
  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }

  account(){
    this.navCtrl.navigateForward('/tabs/account');
  }

}
