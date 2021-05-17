import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookAdder } from '../service/bookAdder.service';
import { Book } from '../shared/book.module';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  books: {name:string,description:string}[]=[];
  constructor(public bookService:BookAdder) { }

  ngOnInit(): void {
    this.books=this.bookService.books;
  }

}
