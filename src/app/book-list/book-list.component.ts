import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookService } from '../book.service';

import { map, takeWhile, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
title: string;
  books: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.title = "Books Count: "+((this.books != null) ? this.books.length : '0');
      });
    //console.warn(this.books);
  }

}
