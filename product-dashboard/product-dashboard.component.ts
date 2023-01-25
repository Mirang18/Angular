import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Promise
    // const promise = new Promise(resolve =>{
    //   console.log("promise call---------------");
      
    //   setTimeout(() => {
    //     resolve('Promise Working');
    //   }, 1);
    // })

    


    //Observable
    const observable = new Observable(subscribe =>{
      console.log('Observable call.......');
      
      setTimeout(() => {
        subscribe.next('Observable Working');
        subscribe.next('Observable Working2');
        subscribe.next('Observable Working3');
        subscribe.next('Observable Working4');
      }, 1);
    }) ;
    observable.pipe(
      filter(d => d === 'Observable Working2')
    )
    .subscribe(result => console.log(result));
  
  }
}
