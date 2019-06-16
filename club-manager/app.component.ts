import { Component, OnInit } from '@angular/core';
import { MockdataService } from './mockdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.getMock();      
    }
   constructor(private mockDataService: MockdataService) {
    
} 
    
  title = 'app works!';
  data:any;
  
  getMock(){
      this.mockDataService.getReqv1Data().subscribe(res => {
          console.log(res);
          this.data = res;
       });
      

  }
  
}