import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() information; //Expect the data to be input to it.
  @Output() val=new EventEmitter();
 selectedForm(formType:string)
 {
   this.val.emit(formType)
 }
  constructor() { }
  ngOnInit() {
  }
}
