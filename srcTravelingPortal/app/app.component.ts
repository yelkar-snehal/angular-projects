import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';


export interface City {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;
  //date = new FormControl(new Date());
 date=[];

  cities: City[] = [
    {value: 'Jaipur-0', viewValue: 'Jaipur'},
    {value: 'Hyderabad-1', viewValue: 'Hyderabad'},
    {value: 'Mumbai-2', viewValue: 'Mumbai'},
    {value: 'Kolkata-3', viewValue: 'Kolkata'},
    {value: 'Delhi-4', viewValue: 'Delhi'}
  ];

  startDate = new Date(this.date[3],this.date[1],this.date[2]);
}

