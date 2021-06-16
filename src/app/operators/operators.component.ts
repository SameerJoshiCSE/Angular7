import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }
  add1=0;add2=0;sub1=0;sub2=0;mul1=0;mul2=0;div1=0;div2=0
  ngOnInit(): void {
  }

}
