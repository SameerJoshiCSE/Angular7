import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() value:Item;
  constructor() { }

  ngOnInit(): void {
  }

}
