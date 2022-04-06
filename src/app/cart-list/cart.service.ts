import { Injectable } from '@angular/core';
import { book1, IBook } from '../product/product.model';

@Injectable()
export class CartService {
  totalCost!: number;
  totalQuantity!: number;
  condition: boolean = true;
  toggle() {
    return (this.condition = !this.condition);
  }
}
