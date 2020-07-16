import { Component, OnInit, ViewChild } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Platform, NavController } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";

@Component({
  selector: 'app-rute',
  templateUrl: './rute.page.html',
  styleUrls: ['./rute.page.scss'],
})
export class RutePage implements OnInit {

  @ViewChild('map', {static: false}) element;

  constructor(
    private navCtrl: NavController,
    public googleMaps: GoogleMaps, public plt: Platform
  ) { }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {

    let map: GoogleMap = this.googleMaps.create(this.element.nativeElement);

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

      let coordinates: LatLng = new LatLng(33.6396965, -84.4304574);

      let position = {
        target: coordinates,
        zoom: 17
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: "assets/images/icons8-Marker-64.png",
        title: 'Our first POI'
      };

      const marker = map.addMarker(markerOptions)
        .then((marker: Marker) => {
          marker.showInfoWindow();
      });
    })
  }

  ngOnInit() {
  }

  home(){
    this.navCtrl.navigateForward('/tabs/home');
  }

}
