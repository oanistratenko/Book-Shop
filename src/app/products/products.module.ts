import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent, BookListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BookComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ProductsModule {}
