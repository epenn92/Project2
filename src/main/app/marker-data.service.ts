import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

interface MarkerData {
  // user: String, 
  // description: String,
  // lat: Number,
  // lng: Number,
  position: google.maps.LatLngLiteral
}

@Injectable({
  providedIn: 'root'
})
export class MarkerDataService {

  // private DB_URL = "DB_URL"
  private DB_URL = "http://localhost:3000/markers";
  constructor(private httpClient: HttpClient) { }

  public getMarkerData() : Observable<MarkerData[]> {

    let url = this.DB_URL;
    return this.httpClient.get<MarkerData[]>(url);
  }
}
