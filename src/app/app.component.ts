import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "Pat";

  constructor() {
    this.changeName("John")
  }

  changeName(name:string) {
    this.name = name
  }
}
