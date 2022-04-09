import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from './cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CartListComponent],
  declarations: [CartListComponent,CartItemComponent],
  providers:[CartService]
})
export class CartModule {}
