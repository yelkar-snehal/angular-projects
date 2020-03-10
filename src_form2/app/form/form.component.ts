import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public AcceptData(value1,value2,value4,value5,value6)
  {
    console.log(value1,value2,value4,value5,value6);
  }

}
