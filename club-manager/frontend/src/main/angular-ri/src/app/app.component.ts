import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Employee } from './employee/employee';
import { NgForm } from '@angular/forms';
import { MockdataService } from '../mock/mockdata.service';
import { ConfigData } from '../mock/screen1config';


interface City{
    id:number;
    name: string;
    code:string;
}

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit, OnChanges{
    
    ngOnInit(): void {
        this.setData();
    }
    
    @Input() power: string;
    title = 'angular-ri-with-test';
    cities1: SelectItem[];
    selectedCity1: City;
    cities: SelectItem[];
    selectedCities: string[] = [];
    
    constructor(private mdSerive: MockdataService) {
        this.cities1 = [
                        {label:'Select City', value:null},
                        {label:'Cholamandalam', value:{id:1, name: 'Cholamandalam', code: 'COL'}},
                        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
                        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
                        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
                        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
                    ];
        
        this.cities = [];
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'India', value:'New Delhi'});
        this.cities.push({label:'Cholamandalam', value:'Uraiyur'});
    }
    
    ngOnChanges( changes: SimpleChanges ){
        //console.log(changes.selectedCity1);
        
        for (let propName in changes) {  
            let change = changes[propName];
            let curVal  = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);

                console.log(curVal);
                console.log(prevVal);
        }
    
    }
    
    emp = new Employee('Jana', 98, null);  
    msg: string = 'Hello World!';

    onFormSubmit(empForm: NgForm) {
       let name = empForm.controls['name'].value;
       let age = empForm.controls['age'].value;
       let city = empForm.controls['city'].value;
       this.emp = new Employee(name, age, city);
       console.log(this.emp)
    }
    
    data:any;
       
    setData(){
        this.mdSerive.getMockStockData().subscribe((data: ConfigData)=> this.data={
                regions: data['regions'],
                state: data['state']
        });
     }

    
    regions: SelectItem[];
    sldRegion:any;
    
    handleLoad(event){
//        this.cities.push({label:'New York', value:'New York'});
//        this.mdSerive.getMockStockData().subscribe((data: ConfigData)=> this.data={
//                regions: data['regions'],
//                state: data['state']
//        });
        this.regions = [];
        for (let entry of this.data.regions) {
            console.log(entry); // 1, "string", false
            this.regions.push({label:entry, value:{id:0,name:entry}});
        }

        
    }
    
}