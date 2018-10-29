import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: BookModel;

  @Output()
  buy: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(`[ngOnInit]`);
  }

  onBuy(event: any) {
    console.log(`Товар куплен ${this.book.name}`);
    this.buy.emit(this.book);
  }

  onViewDetails(event: any): void {
    const link = ['/book', this.book.id];
    this.router.navigate(link);
  }

}
