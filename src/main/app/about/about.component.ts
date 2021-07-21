import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  // addMarker() {
    //   this.markers.push({
      //     position: {
        //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
        //     },
        //     label: {
          //       color: 'red',
          //       text: 'Marker label ' + (this.markers.length + 1),
          //     },
          //     title: 'Marker title ' + (this.markers.length + 1),
          //     options: { animation: google.maps.Animation.BOUNCE },
          //   })
          // }
          // title : String = "Google Maps Page";
          // latitude: number = 39.21997198259251;
          // longitude: number =  -77.31031331941422;
          // 38.95178564092683, -77.34949721709066

constructor() { }
title: String = "Google Maps Page";
zoom: number = 18;
center: google.maps.LatLngLiteral = {
    lat: 38.95178564092683,
    lng: -77.34949721709066
}
  
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 3,

  }

    // marker: google.maps.MapsEventListener = {
    //   remove:
    // }

  ngOnChanges() {
    
  }
  
  ngOnInit() {

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
