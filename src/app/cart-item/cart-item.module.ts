import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { CartItemComponent } from './cart-item.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CartItemComponent],
  declarations: [CartItemComponent],
  providers: [],
})
export class CartModule {}
