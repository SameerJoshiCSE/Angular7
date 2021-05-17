import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [FoodService]
})
export class FoodListComponent implements OnInit {
  foods: {name:string,description:string}[]=[];
  
  constructor(private foodService:FoodService) { 
    this.foodService.foodAdded.subscribe(
      (itemName:string) => alert(itemName+" is added")
    );
  }

  ngOnInit(): void {
    this.foods = this.foodService.foods;
  }
}
