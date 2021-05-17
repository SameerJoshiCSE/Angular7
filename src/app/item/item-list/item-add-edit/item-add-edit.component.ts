import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Item } from '../../shared/item.model';

@Component({
  selector: 'app-item-add-edit',
  templateUrl: './item-add-edit.component.html',
  styleUrls: ['./item-add-edit.component.css']
})
export class ItemAddEditComponent implements OnInit {

  @ViewChild("name") nameInputRef: ElementRef;;
  @ViewChild("description") descInputRef:ElementRef;
  @Output() addedItem = new EventEmitter<Item>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdder(){
    const itemName=this.nameInputRef.nativeElement.value;
    const itemdesc=this.descInputRef.nativeElement.value; 
    const newItem = new Item(itemName,itemdesc);
    this.addedItem.emit(newItem);
  }

}
