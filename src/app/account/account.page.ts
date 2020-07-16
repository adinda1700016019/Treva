import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

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

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    
    .catch(error => {
      console.log(error);
    })
  }

  profile(){
    this.navCtrl.navigateForward('/profile');
  }

}
