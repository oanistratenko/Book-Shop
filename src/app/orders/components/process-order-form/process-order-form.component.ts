import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderModel } from '../../model/order.model';
import { CustomValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit {
  // поле ФИО: обязательное, больше 5 символов, меньше 50 символов.
  // поле Email: обязательное, тип email
  // поле Телефон: обязательное, по возможности использовать паттерн для телефона +38 0ХХ ХХХ-ХХ-ХХ
  // поле Дата доставки: необязательное, но если заполнили, то должно быть завтра или послезавтра или после послезавтра.
  static id = 1;
  orderForm: FormGroup;
  order: OrderModel;

  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      fullName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(17),
          Validators.pattern('^\\+\\d{2}\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$')
        ])
      ],
      deliveryDate: [
        this.minDate,
        CustomValidators.dDateRange(this.minDate, this.maxDate)
      ]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    this.order = new OrderModel();
    this.order.orderId = ProcessOrderFormComponent.id;
    ProcessOrderFormComponent.id++;
    this.order.name = this.orderForm.get('fullName').value;
    this.order.email = this.orderForm.get('email').value;
    this.order.phone = this.orderForm.get('phone').value;
    this.order.totalQuantity = this.cartService.allQuantity;
    this.order.totalSum = this.cartService.allPrice;
    this.order.products = this.cartService.getCartItems();
    if (this.orderForm.get('deliveryDate').value) {
      this.order.ddate = this.orderForm.get('deliveryDate').value;
      console.log(this.order.ddate);
    } else {
      this.order.ddate = null;
    }
    console.log(`Saved: ${JSON.stringify(this.order)}`);
  }
}
