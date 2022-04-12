import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, SharedModule],
  exports: [CartListComponent],
  declarations: [CartListComponent, CartItemComponent],
  providers:[CartService]
})
export class CartModule {}
