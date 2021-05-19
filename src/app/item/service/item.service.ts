import { EventEmitter } from "@angular/core";
import { Item } from '../shared/item.model';

export class ItemService{
    itemSelected = new EventEmitter<Item>();
    items:Item[]=[
        new Item(1,"Sameer Joshi")
    ];


    addItem(id:number,name:string){
        this.items.push({id:id,name:name});
    }
}