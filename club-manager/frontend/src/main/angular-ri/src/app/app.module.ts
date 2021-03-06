import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ButtonModule } from 'primeng/button';
import { MockdataService } from '../mock/mockdata.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule( {
    declarations: [
        AppComponent,
        EmployeeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SelectButtonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        HttpClientModule
    ],
    providers: [MockdataService],
    bootstrap: [AppComponent]
} )
export class AppModule { }