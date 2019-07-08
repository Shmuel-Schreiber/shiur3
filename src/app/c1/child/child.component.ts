import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('val') myVal:string;
  @Output() manchies:EventEmitter<string> = new EventEmitter<string>();
  @Output() num1:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {  }

}
