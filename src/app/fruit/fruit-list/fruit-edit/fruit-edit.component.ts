import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Fruit } from '../../shared/fruit-model';

@Component({
  selector: 'app-fruit-edit',
  templateUrl: './fruit-edit.component.html',
  styleUrls: ['./fruit-edit.component.css']
})
export class FruitEditComponent implements OnInit {
  
  @ViewChild("name") nameInputRef: ElementRef;;
  @ViewChild("description") descInputRef:ElementRef;
  @Output() addedItem = new EventEmitter<Fruit>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdder(){
    const itemName=this.nameInputRef.nativeElement.value;
    const itemdesc=this.descInputRef.nativeElement.value; 
    const newItem = new Fruit(itemName,itemdesc);
    this.addedItem.emit(newItem);
  }
}
