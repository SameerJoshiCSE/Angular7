import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css']
})
export class ItemNameComponent implements OnInit {

  @Input() value:Item;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onItemSelected(){
    this.itemService.itemSelected.emit(this.value);
  }
}
