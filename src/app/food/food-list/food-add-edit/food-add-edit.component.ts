import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Food } from '../shared/food.model';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-food-add-edit',
  templateUrl: './food-add-edit.component.html',
  styleUrls: ['./food-add-edit.component.css'],
})
export class FoodAddEditComponent implements OnInit {

  @ViewChild("name") nameInputRef: ElementRef;;
  @ViewChild("description") descInputRef:ElementRef;
    constructor(private foodService:FoodService) { }

  ngOnInit(): void {
  }
  foodValue = new FoodService();
  onAdder(){
    const itemName=this.nameInputRef.nativeElement.value;
    const itemdesc=this.descInputRef.nativeElement.value; 
    const newItem = new Food(itemName,itemdesc);
    this.foodService.addFood(itemName,itemdesc);
    this.foodService.foodAdded.emit(itemName);
  }



}
