import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model'
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:Item[]=[
    new Item(1,"Sameer Joshi")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(item:Item){
    this.items.push(item);
  }
}
