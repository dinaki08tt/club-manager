import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class MockdataService {

  constructor(private http: Http) { }

  getReqv1Data(){
      let apiUrl = './assets/data/api/req_v1.json';
      return this.http.get(apiUrl)
      .map( (response: Response) => {
         const data = response.json();
         console.log(data);
         return data;
      });
   }  
  
}
