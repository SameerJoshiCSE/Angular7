import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { BookAdder } from '../../service/bookAdder.service';
import { Book } from '../../shared/book.module';

@Component({
  selector: 'app-book-name',
  templateUrl: './book-name.component.html',
  styleUrls: ['./book-name.component.css']
})
export class BookNameComponent implements OnInit {

  @Input() value:Book;
  constructor(private bookService:BookAdder) { }

  ngOnInit(): void {
  }
  
  onSelected(){
    this.bookService.boodSelected.emit(this.value);
  }
}
