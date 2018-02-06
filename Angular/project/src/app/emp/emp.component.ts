import { Component, OnInit, Input } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  @Input() formT: string;
status : String;
setStatus(){
  this.status="emp";
}
  constructor() { }
  ngOnInit() {
  }
}




// data;
// employee;
// form(disp:string)
// {
//   this.data=disp;
// }
// f(formT:string)
// {
//   this.employee=formT;
// }