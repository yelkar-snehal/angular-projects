import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nForm:FormGroup;
  
  post:any;
  
  password:String = '';
  
  name:String = '';

  constructor(private fb : FormBuilder)
  {
    this.nForm = fb.group(
        {
      'name' : [null,Validators.required],
      'password' : [null,Validators.compose([Validators.required,Validators.minLength(7),Validators.maxLength(10)])],
      'validate': ''
        }
    )
  }

  addPost(post)
  {
    this.password = post.password;
    this.name = post.name;
  }
}

