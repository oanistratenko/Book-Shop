import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-order-form',
  templateUrl: './process-order-form.component.html',
  styleUrls: ['./process-order-form.component.css']
})
export class ProcessOrderFormComponent implements OnInit {
  FullName = 'Jon Ivanov';
  Email = 'jon.ivanov@gmail.com';
  Phone = '380991234567';

  constructor() {}

  ngOnInit() {}
}
