import { Component } from '@angular/core';
import {DashboardService} from './dashboardservice';
import { DashboardJson, Match, Game, Score } from './mockdashboard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    completeJson : DashboardJson;
    
    constructor(public dashboardService: DashboardService){
        console.log('logging from constructor');
       console.log("MockJson");
      //  console.log(dashboardService.getDashboardJson());
      // console.log(dashboardService.getDashboardData());
      //  this.completeJson = dashboardService.getDashboardJson();
      
    }
    
//    console.log('logging');
    
//    getHeroes(): void {
//        this.heroService.getHeroes()
//            .subscribe(heroes => this.heroes = heroes);
//      }
    
    ngOnInit() {
   this.getDashBoardData();
      }
    
    getDashBoardData(): void{
        this.dashboardService.getDashboardData().subscribe(obs => this.completeJson = obs);
    }
    
}
