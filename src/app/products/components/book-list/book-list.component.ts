import { Component, OnInit } from '@angular/core';

import { BookModel } from '../../models/book.model';
import { BooksService } from '../../services/books.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booksP: Promise<Array<BookModel>>;
  books: Array<BookModel>;
  router: any;

  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // this.booksService.getBooksAsync().then(books => (this.books = books));
    this.booksP = this.booksService.getBooks();
  }

  onBuy(book: BookModel): void {
    console.log(`[BookListComponent]: ${book.name}`);
    this.cartService.addToCart(book);
  }

  onViewDetails(book: BookModel): void {
    console.log(event);
    const link = ['/book', book.id];
    console.log(link);
    this.router.navigate(link);
  }
}
