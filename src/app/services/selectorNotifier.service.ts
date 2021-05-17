import { EventEmitter } from '@angular/core';
import { Food} from '../food/food-list/shared/food.model';
export class SelectorNotifier{
    constructor(){};
    notifier(name:string){
        console.log(name+" Is added");
    }
}