import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <h3>Accessing BehaviorSubject's Value</h3>

    <input [(ngModel)]="currentValue" type="text"> 
    <br>
    <br>

    current Value is: <b>{{currentValue}}</b>
  `,
})
export class AppComponent {
  subject = new BehaviorSubject('default');

  //-->currenValue is accessor property

  //getter of currentValue accessor property
  //is bound two way binding ngModel
  //ngModel update the template when change happens
  get currentValue () {
    return this.subject.value;
  }
  
  //setter of currentValue accessor property
  //emit the new balue using the setter
  set currentValue (v) {
    this.subject.next(v); 
  }
}