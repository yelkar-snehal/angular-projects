import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirteenth'; 
  
get fun()
{
  var str='Inside fun !';
  return str;
}
}

