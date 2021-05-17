import { EventEmitter } from "@angular/core";
import { Item } from '../shared/item.model';

export class ItemService{
    items:Item[]=[
        new Item(1,"Sameer Joshi")
    ];

    personSelected = new EventEmitter<Item>();
    addPerson(id:number,name:string){
        this.items.push({id:id,name:name});
    }
}