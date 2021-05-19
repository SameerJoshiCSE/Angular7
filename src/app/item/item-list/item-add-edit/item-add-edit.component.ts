import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-add-edit',
  templateUrl: './item-add-edit.component.html',
  styleUrls: ['./item-add-edit.component.css']
})
export class ItemAddEditComponent implements OnInit {

  @ViewChild("id") nameInputRef: ElementRef;;
  @ViewChild("name") descInputRef:ElementRef;
  @Output() addedItem = new EventEmitter<Item>();
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }
  onAdder(){
    this.itemService.addItem(this.nameInputRef.nativeElement.value,this.descInputRef.nativeElement.value);
  }
}
