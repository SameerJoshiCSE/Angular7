import { Component, OnInit } from '@angular/core';
import { ItemService } from './service/item.service';
import { Item } from './shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[ItemService]
})
export class ItemComponent implements OnInit {

  SelectedItem:Item;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.itemSelected.subscribe(
      (item:Item)=> {
        this.SelectedItem=item;
      }
    )
  }

}
