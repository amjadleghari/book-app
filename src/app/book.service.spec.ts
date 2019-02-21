import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './my-own-custom-material-module/my-own-custom-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Book } from './model/book';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      NewBookComponent, BookListComponent
    ],
    imports: [
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MyOwnCustomMaterialModule,
      FlexLayoutModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]}));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
