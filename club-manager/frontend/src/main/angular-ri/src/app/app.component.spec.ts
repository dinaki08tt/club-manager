import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { SelectButtonModule } from 'primeng/selectbutton';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule, Dropdown } from 'primeng/primeng';
import { EmployeeComponent } from './employee/employee.component';
import { ButtonModule } from 'primeng/button';
import { MockdataService } from '../mock/mockdata.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
            providers: [MockdataService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ri'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-ri-with-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-ri-with-test!');
  });
  
  fit('should render new Title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      let comInstance: AppComponent;
      comInstance = fixture.componentInstance;
      comInstance.title='new Title';
      fixture.detectChanges();
      
      
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('new Title');
    });
  
  fit('should render 3 element in dropdown', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      
//      expect(compiled.querySelector(By.css('button[name=name]'))).toBe('Push');
      
      fixture.whenStable().then(() => {
          // first approach
          expect(fixture.nativeElement.querySelector('input[name=name]').value).toBe('Jana');
          // second approach
          expect(fixture.debugElement.query(By.css('input[name=name]')).nativeElement.value).toBe('Jana');
      });

  });
  
});