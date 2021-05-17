import { Component, OnInit } from '@angular/core';
import { Fruit } from '../shared/fruit-model';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits:Fruit[]=[
    new Fruit("Apple","Apple is Red, Green"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(item:Fruit){
    this.fruits.push(item);
  }

}
