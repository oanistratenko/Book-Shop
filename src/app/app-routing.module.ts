import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent, BookDetailsComponent } from './products/components';
import { CartComponent } from './cart/components';
import { ProcessOrderFormComponent } from './orders/components';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'order',
    component: ProcessOrderFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
