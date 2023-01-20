import { Component } from '@angular/core';

 
@Component({
selector: 'app-root',
templateUrl:'./app.component.html'
})
export class AppComponent {
   selectedCountry: any;

   
  countries:any[] = [
    {code:'ind',country:'India'},
    {code:'arg',country:'Argentina'},
    {code:'aus',country:'Australia'},
    {code:'uk',country:'United Kingdom'},
    {code:'rsa',country:'Republic Of South Africa'},
    {code:'urg',country:'Uruguay'}
  ];
  choice(code: any){
    // alert(code)
    // alert(code.value)
this.selectedCountry = code.value;
console.log(code.value);



  }
  
  title:string = 'Mirang';
  isUserLoggedIn:boolean = false

  // users:string[] = ["Mirang","Atharva","Shashwat"];
users:any[] = [

{id:101,name:'Mirang',city:'Mumbai'},
{id:102,name:'Atharva',city:'Pune'},
{id:103,name:'Shashwat',city:'Delhi'}

];

}
 