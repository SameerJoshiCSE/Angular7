import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css']
})
export class ItemNameComponent implements OnInit {

  @Input() value:Item;
  constructor() { }

  ngOnInit(): void {
  }

}
