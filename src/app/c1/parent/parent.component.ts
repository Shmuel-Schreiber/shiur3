import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  startValue:string = "";
  endValue:string;
  num1:number;
  num2:number;
  constructor() { }

  ngOnInit() {
  }

}
