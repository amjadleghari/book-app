import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../Book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})


export class NewBookComponent implements OnInit {
  categories = ['drama', 'comedy', 'sport'];
  newBookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    author: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService, 
    private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newBookForm.value);
    this.bookService.addBook(this.newBookForm.value)
      .subscribe(() => this.goBack());
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.newBookForm.controls[controlName].hasError(errorName);
  }

  goBack(): void {
    this.location.back();
  }

}
