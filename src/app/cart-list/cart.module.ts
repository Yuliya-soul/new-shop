import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CartListComponent],
  declarations: [CartListComponent],
})
export class CartModule {}
