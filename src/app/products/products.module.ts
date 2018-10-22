import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { BookComponent, BookListComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [BookComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ProductsModule {}
