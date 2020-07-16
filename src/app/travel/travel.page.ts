import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { DiskripsiPage } from '../diskripsi/diskripsi.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {

  jsonData: any;

  constructor(
    private navCtrl: NavController
  ) 
  {
    this.initializaJSONData();
  }

  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.title.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  selectVal(val)
  {
    this.navCtrl.navigateForward('/diskripsi()');
  }

  initializaJSONData()
  {
    this.jsonData = [
      {
        "id": 1,
        "title": "Jogja Bay",
        "lokasi": "Jalan Utara Stadion, Maguwoharjo, Depok, Jenengan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
        "img": "assets/icon/jogjabay.PNG"
      },
      {
        "id": 2,
        "title": "Prambanan Temple",
        "lokasi": "Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571",
        "img": "assets/icon/candi.jpg"
      },
      {
        "id": 3,
        "title": "Pine Forest Mangunan",
        "lokasi": " Sukorame, Mangunan, Dlingo, Bantul, Daerah Istimewa Yogyakarta 66783",
        "img": "assets/icon/pinus.jpg"
      }
    ];
  }

  ngOnInit() {
  }

  home(){
    this.navCtrl.navigateForward('/tabs/home');
  }

  diskripsi(){
    this.navCtrl.navigateForward('/diskripsi');
  }

}
