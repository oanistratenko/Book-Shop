import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BookModel } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: BookModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.book = new BookModel();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) =>
          this.booksService.getBook(+params.get('id'))
        )
      ) // this.taskArrayService.getTask(+params.get('taskID'))))
      .subscribe(book => (this.book = { ...book }), err => console.log(err));
  }

  onGoBack(): void {
    this.router.navigate(['/books']);
  }
}
