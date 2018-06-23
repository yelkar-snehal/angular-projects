import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourteen';
  str='Marvellous Infosystems';

  get fun()
    {
       return this.str.length;
    }

    get gun()
    {
       return this.str.toUpperCase();
    }
  
}
