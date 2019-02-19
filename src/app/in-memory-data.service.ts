import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const books = [
      {
        id: 1,
        "title": "War and Peace",
        "category": "Litrary Fiction, Fiction Classics, Historical Fiction",
        "author": "Leo Tolstoy",
        "description": "War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men."+
        "A s Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture.And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature."
      },
      {
        id: 2,
        "title": "Song of Solomon",
        "category": "Litrary Fiction",
        "author": "Toni Morrison",
        "description": "Milkman Dead was born shortly after a neighborhood eccentric hurled himself off a rooftop in a vain attempt at flight.For the rest of his life he, too, will be trying to fly.With this brilliantly imagined novel, Toni Morrison transfigures the coming- of - age story as audaciously as Saul Bellow or Gabriel García Márquez.As she follows Milkman from his rustbelt city to the place of his family’s origins, Morrison introduces an entire cast of strivers and seeresses, liars and assassins, the inhabitants of a fully realized black world."
      },
      {
        id: 3,
        "title": "Ulysses",
        "category": "Literary Fiction",
        "author": "JAMES JOYCE",
        "description": "Ulysses is a modernist novel by Irish writer James Joyce. It was first serialised in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday. It is considered to be one of the most important works of modernist literature[1] and has been called a demonstration and summation of the entire movement.[2] According to Declan Kiberd, Before Joyce, no writer of fiction had so foregrounded the process of thinking"
      },
      {
        id: 4,
        "title": "The Shadow of the Wind",
        "category": "Literary Fiction | Suspense & Thriller",
        "author": "CARLOS RUIZ ZAFON",
        "description": "The Shadow of the Wind"
      },
      {
        id: 5,
        "title": "The Fellowship of the Ring",
        "category": "Epic Fantasy",
        "author": "J.R.R. TOLKIEN",
        "description": "The Fellowship of the Ring"
      },
      {
        id: 6,
        "title": "Don Quixote",
        "category": " Literary Fiction | Fiction Classics | Historical Fiction",
        "author": "MIGUEL DE CERVANTES",
        "description": "Don Quixote"
      },
      {
        id: 7,
        "title": "The Golden Compass: His Dark Materials",
        "category": "Children’s Middle Grade Action & Adventure Books | Children’s Picture Books",
        "author": "PHILIP PULLMAN",
        "description": "The Golden Compass: His Dark Materials"
      },
      {
        id: 8,
        "title": "Catch-22",
        "category": "Literary Fiction | Fiction Classics | Military Fiction",
        "author": "JOSEPH HELLER",
        "description": "Catch-22"
      },
      {
        id: 9,
        "title": "1984",
        "category": "Fiction",
        "author": "GEORGE ORWELL",
        "description": "1984"
      },
      {
        id: 10,
        "title": "The Kite Runner",
        "category": "Literary Fiction",
        "author": "KHALED HOSSEINI",
        "description": "The Kite Runner"
      }
    ];
    return { books };
  }
  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the books array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
