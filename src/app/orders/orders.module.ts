import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { ProcessOrderFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [ProcessOrderFormComponent],
  exports: [ProcessOrderFormComponent]
})
export class OrdersModule {}
