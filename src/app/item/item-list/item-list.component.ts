import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../shared/item.model'
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:{id:number,name:string}[]=[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.items=this.itemService.items;
  }

  onItemAdded(item:Item){
    this.items.push(item);
  }
}
