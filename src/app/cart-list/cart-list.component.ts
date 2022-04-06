import { Component, OnInit } from '@angular/core';
import { book1, book2, IBook } from '../product/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  constructor(public cartService: CartService) {}
  public books: Array<IBook> = [book1, book2];
  condition: boolean = true;
  ngOnInit(): void {}
  toggle(): void {
    this.condition = this.cartService.toggle();
  }
  trackByBooks(index: number, item: IBook): number {
    return item.id;
  }
}
