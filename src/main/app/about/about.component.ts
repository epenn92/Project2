import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { InitalPosService } from '../inital-pos.service';

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

constructor(private initalPosService : InitalPosService) {
  
}
title: String = "Google Maps Page";
center: google.maps.LatLngLiteral = {
  lat: 37.09024, 
  lng: -95.712891
}

options: google.maps.MapOptions = {
  mapTypeId: 'roadmap',
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  maxZoom: 20,
  minZoom: 3,
  
}
// coordinates: any;
ngOnInit(): void {
  console.log(this.center);
  
  let map = this.getMap();
  
  google.maps.event.addListener(map, "click", (event) => {
    this.addMarkers(event.latLng, map)
  });
  
  // this.addMarkers(bangalore, map);
  //   google.maps.event.addListener(map, "dblclick", (event) => {
    //     this.addMarkers(event.latLng, map);
    //   });
    
  }
  // }
getMap = () => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: this.center,
  }
  )
  const currentLocationButton = document.createElement("button");
  currentLocationButton.setAttribute("id","#locationButton")
  currentLocationButton.textContent = "Pan to current Location";
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(currentLocationButton);
  currentLocationButton.addEventListener("click", () => {
    console.log('clicked')
    map.setZoom(11);
    this.getPos()
    map.setCenter(this.center);
  })
  return map;
}

getPos = () => { 
  this.initalPosService.getPosition().subscribe(
    (pos: GeolocationPosition) => {
      this.center = {
        lat: +(pos.coords.latitude),
        lng: +(pos.coords.longitude)
      }
      console.log(this.center);
    }
    )
  }
  
  addMarkers(location: google.maps.LatLngLiteral, map: google.maps.Map): void {
    const label = "ABCDEF"
    let labelIndex: number = 0;
    if(labelIndex < 6) {

      new google.maps.Marker({
        
        position: location,
        label: label[labelIndex++ % label.length],
        map: map,
      })
    }
    // else {
    //   label.
    // }
  console.log(location);
  console.log(label)
  console.log(labelIndex)
}
    // marker: google.maps.MapsEventListener = {
    //   remove:
    // }
  
  ngOnChanges() {
  }
  
  
  
}
// getPos = async() => { 
//   await this.initalPosService.getPosition().subscribe(
//     (pos: GeolocationPosition) => {
//       this.center = {
//         lat: +(pos.coords.latitude),
//         lng: +(pos.coords.longitude)
//       }
//       console.log(this.center);
//     }
//   )
// }
// getMap = () => {
// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//   zoom: 12,
//   center: this.center,
// }
// );
// return map;
// }

// var i=0
// function addListing(location) {
//   var addMarker;
//   var iMax=1;

//   if(i<=iMax) {
//       addMarker = new google.maps.Marker({
//       draggable:false,
//       position: location,
//       map: map
//   });

//   google.maps.event.addListener(addMarker, 'dblclick', function() {
//     addMarker.setMap(null);
//     i=1;
//   });

//   i++;

//   } else {
//       console.log('you can only post' , i-1, 'markers');
//       }
// } 
