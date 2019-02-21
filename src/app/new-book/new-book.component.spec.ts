import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewBookComponent } from './new-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BookService } from '../book.service';
import { BookListComponent } from '../book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from '../my-own-custom-material-module/my-own-custom-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookComponent, BookListComponent ],
      imports: [
        HttpClientModule,
         ReactiveFormsModule,
          AppRoutingModule,
        BrowserAnimationsModule,
        MyOwnCustomMaterialModule,
        FlexLayoutModule
        ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
