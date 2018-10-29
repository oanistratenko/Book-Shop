import { BookModel } from './../../products/models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {
  cartItems = [
    new CartItemModel(1, 'Angular development and debug', 10, 'img1.jpg', 1),
    new CartItemModel(2, 'CSS styles', 20, 'img2.jpg', 1)
  ];
  private _allQuantity = 2;
  public get allQuantity() {
    return this._allQuantity;
  }
  public set allQuantity(value) {
    this._allQuantity = value;
  }
  private _allPrice = 30;
  public get allPrice() {
    return this._allPrice;
  }
  public set allPrice(value) {
    this._allPrice = value;
  }

  private cartsUrl = 'http://localhost:3000/cartitems';

  constructor(private http: HttpClient) {}

  // Реализовать сервис CartHttpService c двумя методами:
  // getCartItems(): Promise<Array<CartItemModel>>. Использовать get метод.
  // addToCart(book: BookModel): Promise<CartItemModel>. Использовать post метод.

  // getTasks(): Promise<TaskModel[]> {
  //   return this.http
  //     .get(this.tasksUrl)
  //     .toPromise()
  //     .then(response => <TaskModel[]>response)
  //     .catch(this.handleError);
  // }

  getCartItems(): Promise<CartItemModel[]> {
    const url = `${this.cartsUrl}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => <CartItemModel[]>response)
      .catch(this.handleError);
  }

  getCartItem(id: number): Promise<CartItemModel> {
    const url = `${this.cartsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => <CartItemModel>response)
      .catch(this.handleError);
  }

  // для получения списка товаров в корзине
  // getCartItems(): Array<CartItemModel> {
  //   return this.cartItems;
  // }

  findCartItem(id: number): CartItemModel {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === id) {
        return this.cartItems[i];
      }
    }
    return null;
  }

  removeCartItem(item: CartItemModel) {
    const index: number = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  // для пересчета суммарного количества книг и суммы после изменения содержимого корзины
  updateTotals() {
    this._allQuantity = 0;
    this._allPrice = 0;

    if (this.cartItems) {
      for (let i = 0; i < this.cartItems.length; i++) {
        this._allQuantity += this.cartItems[i].quantity;
        this._allPrice += this.cartItems[i].price * this.cartItems[i].quantity;
      }
    }

    console.log(
      `In cart, all books: ${this.allQuantity} total cost: ${this.allPrice}`
    );
  }

  // для добавления книжки в корзину. Если книжка есть в корзине, то увеличивать количество.
  addToCart(book: BookModel): CartItemModel {
    let item: CartItemModel = this.findCartItem(book.id);
    if (item) {
      item.quantity++;
      // item.price = book.price;
    } else {
      item = {
        id: book.id,
        name: book.name,
        price: book.price,
        img: book.img,
        quantity: 1
      };
      this.cartItems.push(item);
    }
    this.updateTotals();
    return item;
  }

  // для удаления книжки из корзины.
  delFromCart(cartItem: CartItemModel) {
    let item: CartItemModel = this.findCartItem(cartItem.id);
    if (item) {
      item.quantity--;
      // item.price -= cartItem.price;
      if (!item.quantity) {
        this.removeCartItem(item);
        item = null;
      }
      this.updateTotals();
    }
    return item;
  }

  // для увеличения количества экземпляров купленных книг
  incQuantity(cartItem: CartItemModel, n: number = 1) {
    this.addToCart(cartItem);
    this.updateTotals();
  }

  // для уменшения количества экземпляров купленных книг до 1.
  decQuantity(cartItem: CartItemModel, n: number = 1) {
    this.delFromCart(cartItem);
    this.updateTotals();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
