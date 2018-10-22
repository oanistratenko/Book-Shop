import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItemModel>;
  allQuantity: number;
  allPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
  }

  onPlus(cartItem: CartItemModel): void {
    console.log(`[CartComponent]: ${cartItem.name}`);
    this.cartService.incQuantity(cartItem);
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
  }

  onMinus(cartItem: CartItemModel): void {
    console.log(`[CartComponent]: ${cartItem.name}`);
    this.cartService.decQuantity(cartItem);
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
  }

  onDelete(cartItem: CartItemModel): void {
    console.log(`[CartComponent удаление]: ${cartItem.name}`);
    this.cartService.delFromCart(cartItem);
    this.allQuantity = this.cartService.allQuantity;
    this.allPrice = this.cartService.allPrice;
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
  }
}
