import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../product/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  constructor(public cartService: CartService) {}
  public books: Array<IBook> = [];
  private sub!: Subscription;
  input!: IBook;
  condition: boolean = true;
  totalQuantity = 0;
  totalCost = 0;

  ngOnInit(): void {
    this.sub = this.cartService.channel$.subscribe((data: IBook) => {
      this.input = data;
      if (this.books.includes(this.input)) {
        let indexOfOrderedBook = this.books.indexOf(this.input);
        this.books[indexOfOrderedBook].quantity++;
      } else {
        this.books.push(this.input);
        let indexOfOrderedBook = this.books.indexOf(this.input);
        this.books[indexOfOrderedBook].quantity++;
      }
      this.totalQuantity++;
      this.totalCost = this.totalCost + this.input.price;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggle(): void {
    this.condition = this.cartService.toggle();
  }
  trackByBooks(index: number, item: IBook): number {
    return item.id;
  }
}
