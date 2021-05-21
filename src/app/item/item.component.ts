import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private itemService:ItemService,private route:Router,private croute:ActivatedRoute) { }

  ngOnInit(): void {
    this.itemService.itemSelected.subscribe(
      (item:Item)=> {
        this.SelectedItem=item;
      }
    );
  }

}
