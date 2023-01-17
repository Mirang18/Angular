import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  pageTitle:string = 'Data Binding in Angular';
  imageUrl:string="assets/images/barca.png";
  image:string="assets/images/pedriGavi.webp";
  btnStatus:boolean = false;
UserName: any;
  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(){
    this.pageTitle = "Data Collection";
  }

}
