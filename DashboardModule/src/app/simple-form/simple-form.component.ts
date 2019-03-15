import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  
  ngOnInit() {
      this.http.get("http://localhost:8080/api/professor/all").
      pipe(map((response: any) => response.json())).
      subscribe((data) => {this.displaydata(data)})
   }

  displaydata(data) {this.httpdata = data;}
}
