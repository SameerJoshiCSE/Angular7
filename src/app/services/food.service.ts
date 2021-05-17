import { EventEmitter } from '@angular/core';
import { Food} from '../food/food-list/shared/food.model';
export class FoodService{
    foods:Food[]=[
        new Food("pooran Poli","Pooran Poli is Sweet"),
      ];

      foodAdded = new EventEmitter<string>();
    addFood(name:string,description:string){
        this.foods.push({name:name,description:description});
    }
}