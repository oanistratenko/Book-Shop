import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
    new BookModel(1, 'Angular  development and debug', 10, 'img1.jpg'),
    new BookModel(2, 'CSS styles', 20, 'img2.jpg'),
    new BookModel(3, 'HTML practice', 40, 'img3.jpg')
  ];

  constructor() {}

  getBooksAsync(): Promise<Array<BookModel>> {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(this.books);
      }, 1000);
    });
  }
}
