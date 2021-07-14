import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {
  id: number, 
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";
  constructor(private httpClient: HttpClient) { }

  public getProduct() : Observable<Data[]> {
    
    let url = this.SERVER_URL;
    return this.httpClient.get<Data[]>(url);
  }
}
