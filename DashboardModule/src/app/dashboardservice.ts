import { Injectable } from '@angular/core';
import { DashboardJson, Match, Game, Score } from './mockdashboard';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
//Import RxJs required methods
@Injectable( {
    providedIn: 'root'
} )
export class DashboardService {

    constructor (private http: Http) {}

    private dsUrl = 'http://localhost:9095/tournament/api/dashboard'; 
    private dashJson :DashboardJson;
    
//    private httpOptions = {
//            headers: new HttpHeaders({
//              'Content-Type':  'application/json;charset=utf-8'
//            })};
    
    
    getDashboardData() : Observable<DashboardJson> {
        let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': true});
        let options = new RequestOptions({headers});               
//        let response1 = this.http.get(this.dsUrl)
//        .pipe(map((res:Response) => res.json()));
//        let sub = response1.subscribe(res => console.log(res));
//        sub.unsubscribe();
//        return null;
//        this.http.get(this.dsUrl).subscribe(data => {
//            this.dashJson = data;
//        })
//        var headers = {
//               'Access-Control-Allow-Origin': true,
//               'Content-Type': 'application/json; charset=utf-8',
//               "X-Requested-With": "XMLHttpRequest"
//                 };
//        const headers = new HttpHeaders()
//        .append('Content-Type', 'application/json')
//        .append('Access-Control-Allow-Headers', 'Content-Type')
//        .append('Access-Control-Allow-Methods', 'GET')
//        .append('Access-Control-Allow-Origin', '*');
//      return this.http.get<Account>(baseUrl + 'accounts',  {headers});
//        const headers = new Headers()
//      .append('Access-Control-Allow-Origin', '*');
//      .append('Access-Control-Allow-Headers', 'Content-Type')
//      .append('Access-Control-Allow-Methods', 'GET')
//      .append('Access-Control-Allow-Origin', '*');
        
        
        return this.http.get(this.dsUrl).pipe(map(res => <DashboardJson>res.json()));
        
//       return null; 
    }
    
    
//    loadAll() {
//        this.http.get(`${this.baseUrl}/todos`).subscribe(data => {
//          this.dataStore.todos = data;
//          this._todos.next(Object.assign({}, this.dataStore).todos);
//        }, error => console.log('Could not load todos.'));
//      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    getDashboardJson(): DashboardJson {
        var dashjson = new DashboardJson();
        var matches: Match[] = new Array();
        
        dashjson.tournamentName = "ADK TT Open 2030";
        var match1 = new Match();
        match1.p1 = "ADK";
        match1.p2 = "JGD";
        match1.event = "Cadets";
        match1.tableno = 1;
        var g1 = new Game();
        g1.p1 = 11;
        g1.p2 = 2;
        var score1 = new Score();
        score1.g1 = g1;
        var g2 = new Game();
        g2.p1 = 1;
        g2.p2 = 11;
        score1.g2 = g2;
        var g3 = new Game();
        g3.p1 = 3;
        g3.p2 = 11;
        score1.g3 = g3;
        var g4 = new Game();
        g4.p1 = 11;
        g4.p2 = 2;
        score1.g4 = g4;
        var g5 = new Game();
        g5.p1 = 13;
        g5.p2 = 11;
        score1.g5 = g5;
        match1.score = score1;
        matches.push(match1);
 //     dashjson.matches.push(match1);
        
        //match2
        
        var match2 = new Match();
        match2.p1 = "UPA";
        match2.p2 = "ImranKhan";
        match2.event = "Mens";
        match2.tableno = 2;
        var g21 = new Game();
        g21.p1 = 11;
        g21.p2 = 2;
        var score2 = new Score();
        score2.g1 = g1;
        var g22 = new Game();
        g22.p1 = 11;
        g22.p2 = 2;
        score2.g2 = g22;
        var g23 = new Game();
        g23.p1 = 7;
        g23.p2 = 11;
        score2.g3 = g23;
        var g24 = new Game();
        g24.p1 = 4;
        g24.p2 =11;
        score2.g4 = g24;
        var g25 = new Game();
        g25.p1 = 11;
        g25.p2 = 2;
        score2.g5 = g25;
        match2.score = score2;
        matches.push(match2);
        
 //match3
        
        var match2 = new Match();
        match2.p1 = "ChootaBeem";
        match2.p2 = "Ben10";
        match2.event = "SuperHumans";
        match2.tableno = 3;
        var g21 = new Game();
        g21.p1 = 11;
        g21.p2 = 2;
        var score2 = new Score();
        score2.g1 = g1;
        var g22 = new Game();
        g22.p1 = 11;
        g22.p2 = 2;
        score2.g2 = g22;
        var g23 = new Game();
        g23.p1 = 7;
        g23.p2 = 11;
        score2.g3 = g23;
        var g24 = new Game();
        g24.p1 = 4;
        g24.p2 =11;
        score2.g4 = g24;
        var g25 = new Game();
        g25.p1 = 11;
        g25.p2 = 2;
        score2.g5 = g25;
        match2.score = score2;
        matches.push(match2);
        dashjson.matches = matches;
        
        return dashjson;
    }
}
