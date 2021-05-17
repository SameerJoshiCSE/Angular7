import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../../shared/fruit-model';

@Component({
  selector: 'app-fruit-name',
  templateUrl: './fruit-name.component.html',
  styleUrls: ['./fruit-name.component.css']
})
export class FruitNameComponent implements OnInit {

  @Input() value:Fruit;
  constructor() { }

  ngOnInit(): void {
  }
}
