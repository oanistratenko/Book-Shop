import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

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

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
          Validators.maxLength(17)
        ])
      ],
      deliveryDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(`Saved: ${JSON.stringify(form.value)}`);
  }
}
