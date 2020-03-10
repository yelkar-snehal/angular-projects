import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

export interface BOOKS {
  name: string;
  position: number;
   author: string;
   pages: number;
   price: number;
}

const BOOK_DATA: BOOKS[] = [
  {position: 1, name: 'Angular from theory to practice', author: 'Asim Hussain',pages:700 , price: 1000},
  {position: 2, name: 'Linux System Programming', author: 'Robert Love',pages:400 , price: 500},
  {position: 3, name: 'Programming Windows',  author: 'Charles Petzold',pages:1200 , price: 900},
  {position: 4, name: 'Embedded Android', author: 'Karim Yaghmour',pages: 400, price: 500},
  {position: 5, name: 'Core Java Vol-1', author: 'Horstmann-Cornell',pages: 825, price: 700}
  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'author', 'pages', 'price'];
  dataSource = BOOK_DATA;
}

