import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './products/components';
import { CartComponent } from './cart/components';
import { ProcessOrderFormComponent } from './orders/components';

const routes: Routes = [
  {
    path: 'orders',
    component: ProcessOrderFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products',
    component: BookListComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
