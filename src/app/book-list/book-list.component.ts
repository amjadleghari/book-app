import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';


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
      });
  }

  deleteBook(Id: number): void {
    this.bookService.deleteBook(Id)
    .subscribe(val => {
      this.books = this.books.filter(b => b.id !== Id);
    });
  }

}
