import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemService } from '../../service/item.service';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-name',
  templateUrl: './item-name.component.html',
  styleUrls: ['./item-name.component.css']
})
export class ItemNameComponent implements OnInit {

  @Input() value:Item;
  constructor(private itemService:ItemService,private route:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getIndex(s){
    return this.itemService.items.indexOf(s);
  }
  onItemSelected(){
    let index=this.getIndex(this.value)
    this.route.navigate(["/item",this.itemService.items[index].id,this.itemService.items[index].name]);
  }
}
