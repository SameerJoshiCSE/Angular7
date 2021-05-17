import { EventEmitter } from '@angular/core';
import { Book } from '../shared/book.module';
export class BookAdder{
    boodSelected = new EventEmitter<Book>();

    books:Book[]=[
        new Book("J K Rowling","Harry Potter")
      ];

    addBooks(name:string,description:string){
        this.books.push({name:name,description:description});
    }
}