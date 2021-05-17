import { Component, OnInit,ViewChild,EventEmitter,ElementRef,Output } from '@angular/core';
import { BookAdder } from '../../service/bookAdder.service';
import { Book } from "../../shared/book.module";
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @ViewChild("name") nameInputRef: ElementRef;;
  @ViewChild("description") descInputRef:ElementRef;
  @Output() addedItem = new EventEmitter<Book>();
  constructor(private bookService:BookAdder) { }

  ngOnInit(): void {
  }

  onAdder(){
    const itemName=this.nameInputRef.nativeElement.value;
    const itemdesc=this.descInputRef.nativeElement.value; 
    const newItem = new Book(itemName,itemdesc);
    this.bookService.addBooks(itemName,itemdesc);
  }

}
