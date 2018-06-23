import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button Click Demo';
  str='Marvellous Infosystems'

  fun(event:any)
  {
    this.str='button clicked';
  }
}
