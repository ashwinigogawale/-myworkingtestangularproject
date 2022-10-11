import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputvariable="Hi i am your parent";

  getdata(value){
console.log(value);
  }
}
