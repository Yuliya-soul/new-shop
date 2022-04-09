import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from './cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [CommonModule, MatButtonModule,SharedModule],
  exports: [CartListComponent],
  declarations: [CartListComponent,CartItemComponent],
  providers:[CartService]
})
export class CartModule {}
