import { Component, OnInit } from '@angular/core';
import { BookAdder } from './service/bookAdder.service';
import { Book } from './shared/book.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookAdder]
})
export class BookComponent implements OnInit {

  selectedBook:Book;
  constructor(private boodSelected:BookAdder) { }

  ngOnInit(): void {
    this.boodSelected.boodSelected.subscribe(
      (book:Book) =>{
        this.selectedBook = book;
      }
    )
  }

}
