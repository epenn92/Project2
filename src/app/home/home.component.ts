import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: any[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInIt() {
    this.products = this.apiService.
  }
}


