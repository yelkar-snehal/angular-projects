import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div style="text-align:center">
  <h1>
  Inline format!
</h1>
<form>
  Marvellous Infosystems
  <br><br>
  <input name="Text" type="text">
</form>
</div>`,
  styles:['input{ background-color: lightcyan;color:blue;}']
})
export class AppComponent {
  title = 'eighth';
}
