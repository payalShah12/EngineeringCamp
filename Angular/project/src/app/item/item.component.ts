import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() formType: string;
  constructor() { }
status : String;

setStatus()
{
  this.status="item";
}
  ngOnInit() {
  }

}
