import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { CartComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartComponent]
})
export class CartModule { }
