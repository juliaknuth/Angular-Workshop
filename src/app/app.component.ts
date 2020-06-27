import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
}



