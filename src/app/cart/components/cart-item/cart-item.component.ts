import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  count = 1;

  @Input()
  cartItem: CartItemModel;

  @Output()
  plus: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  @Output()
  minus: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  @Output()
  del: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log(`[ngOnInit]`);
  }

  onPlusCount(event: any) {
    this.count++;
    console.log(`Товар добавлен ${this.cartItem.name} : ${this.count}`);
    console.log(event);
    this.plus.emit(this.cartItem);
  }

  onMinusCount(event: any) {
    if (this.count > 0) {
      this.count--;
      console.log(`Товар удален ${this.cartItem.name} : ${this.count}`);
      console.log(event);
      this.minus.emit(this.cartItem);
    }
  }

  onDelete(event: any) {
    console.log(event);
    this.del.emit(this.cartItem);
  }
}
