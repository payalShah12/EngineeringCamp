import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data;
employee;
form(formType:string)
{
  this.data=formType;
}
f(formT:string)
{
  this.employee=formT;
}
  selectedForm(selected){
    console.log(selected.target.value);
  }
}






// title = 'app';
//   info={
//     name:"Simran",
//     age:"24"
//   };
//   yell(e){
//     alert("I am Yelling!");
//   }