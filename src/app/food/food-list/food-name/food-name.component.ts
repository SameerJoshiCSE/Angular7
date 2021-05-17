import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../shared/food.model';
import { SelectorNotifier} from '../../../services/selectorNotifier.service';

@Component({
  selector: 'app-food-name',
  templateUrl: './food-name.component.html',
  styleUrls: ['./food-name.component.css']
})
export class FoodNameComponent implements OnInit {

  @Input() value:Food;
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    const show = new SelectorNotifier();
    show.notifier(this.value.name);
  }

}
