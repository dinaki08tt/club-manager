import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
//import { Http, Headers, Response } from '@angular/http';
//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map'

import { ConfigData } from './screen1config';

@Injectable()
export class MockdataService {

  constructor(private http:HttpClient) {}
  
  getMockStockData(){
    let apiUrl = './assets/data/stocksapi/lookup.json';
    return this.http.get<ConfigData>(apiUrl);   
  }
  
}