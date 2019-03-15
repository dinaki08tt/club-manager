import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboardservice';
import { DashboardJson, Match, Game, Score } from './mockdashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dashboardService: DashboardService) {
      console.log('logging from constructor');
      console.log("MockJson");
     //  console.log(dashboardService.getDashboardJson());
     // console.log(dashboardService.getDashboardData());
     this.completeJson = dashboardService.getDashboardJson();
    
  }

  ngOnInit() {
  }
  
  completeJson : DashboardJson;
  

  getDashBoardData(): void{
      this.dashboardService.getDashboardData().subscribe(obs => this.completeJson = obs);
  }
}
