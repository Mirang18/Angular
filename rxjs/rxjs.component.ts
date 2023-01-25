import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
//Observables are unicast

// const observable = new Observable(obj => obj.next(Math.random()));

// //1st Subscriber
// observable.subscribe(d => console.log(d));

// // 2nd Subscriber

// observable.subscribe(d => console.log(d));



//  Subject

//  const subject = new Subject();

// // 1st Subscriber
//  subject.subscribe(d => console.log((d)));

// // 2nd Subscriber

//  subject.subscribe(d => console.log((d)));
// subject.next(Math.random());


//As Data Consumer

const subject = new Subject();     //(a-d)For subject
const data = ajax('https://jsonplaceholder.typicode.com/users');  //(1-3)for observable

 data.subscribe(d => console.log(d)); //2
data.subscribe(d => console.log(d));  //3

  // subject.subscribe(d => console.log(d));   //b
  // subject.subscribe(d => console.log(d));   //c

 const result = data.subscribe(subject); //d

  }

}
