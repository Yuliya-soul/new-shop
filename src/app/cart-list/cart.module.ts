import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from './cart.service';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CartListComponent],
  declarations: [CartListComponent],
  providers:[CartService]
})
export class CartModule {}
