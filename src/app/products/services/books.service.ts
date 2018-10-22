import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = [
    new BookModel(1, 'Angular  development', 10, 'img1.jpg'),
    new BookModel(2, 'CSS styles', 20, 'img2.jpg'),
    new BookModel(3, 'HTML practice', 40, 'img3.jpg'),
    new BookModel(4, 'C# 5 .NET', 15, 'img4.jpg'),
    new BookModel(5, 'PostgreSQL', 25, 'img5.jpg'),
    new BookModel(6, 'PHP', 34, 'img6.jpg'),
    new BookModel(7, 'Linux', 18, 'img7.jpg'),
    new BookModel(8, 'Rust', 22, 'img8.jpg'),
    new BookModel(9, 'Pro Java', 17, 'img9.jpg'),
    new BookModel(10, 'JAVA Generics', 19, 'img10.jpg'),
    new BookModel(11, 'Java Network', 30, 'img11.jpg'),
    new BookModel(12, 'Oracle Pl/Sql', 42, 'img12.jpg'),
    new BookModel(13, 'Learning Oracle', 16, 'img13.jpg'),
    new BookModel(14, 'Oracle 2nd Edition', 24, 'img14.jpg'),
    new BookModel(15, 'Pro Git', 21, 'img15.jpg'),
    new BookModel(16, 'Git for teams', 26, 'img16.jpg')
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
