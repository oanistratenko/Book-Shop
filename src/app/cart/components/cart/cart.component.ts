import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './../../services/cart.service';
import { CartHttpService } from './../../services/cart-http.service';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartItems: Array<CartItemModel>;
  cartItems: Promise<Array<CartItemModel>>;


  allQuantity: number;
  allPrice: number;

  constructor(
    private router: Router,
    private cartService: CartService,
    private cartHttpService: CartHttpService
  ) {}

  ngOnInit() {
    this.cartItems = this.cartHttpService.getCartItems();
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
  }

  onPlus(cartItem: CartItemModel): void {
    console.log(`[CartComponent]: ${cartItem.name}`);
    this.cartService.incQuantity(cartItem);
    this.update();
  }

  private update() {
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
  }

  onMinus(cartItem: CartItemModel): void {
    console.log(`[CartComponent]: ${cartItem.name}`);
    this.cartService.decQuantity(cartItem);
    this.update();
  }

  onDelete(cartItem: CartItemModel): void {
    console.log(`[CartComponent удаление]: ${cartItem.name}`);
    this.cartService.delFromCart(cartItem);
    this.update();
  }

  onCreateOrder() {
    let price: number;
    if (this.cartItems) {
      for (let i = 0; i < this.cartItems.length; i++) {
        price = this.cartItems[i].quantity * this.cartItems[i].price;
        console.log(
          `Order books: ${this.cartItems[i].name} count: ${
            this.cartItems[i].quantity
          }  total cost: ${price}`
        );
      }
    }
    const link = ['/order'];
    this.router.navigate(link);
  }
}
