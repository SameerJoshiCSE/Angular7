import { EventEmitter } from "@angular/core";
import { Item } from '../shared/item.model';

export class ItemService{
    itemSelected = new EventEmitter<Item>();
    items:Item[]=[
        new Item(1,"Books"),
        new Item(2,"Pencils")
    ];


    addItem(id:number,name:string){
        this.items.push({id:id,name:name});
    }

    editItem(id:number,name:string){
        
    }
}