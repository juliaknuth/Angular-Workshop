import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  template: `

    <input #inputElementRef
    [value]="title"
    (keyup.enter)="changeTitle($event.target.value)">
    <button (click)="changeTitle('Button clicked!')">Save</button>
  `,

  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
