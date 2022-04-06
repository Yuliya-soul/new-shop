import { Component, OnInit } from '@angular/core';
import { IBook } from '../first-component/first-component.models';
import { book1, book2 } from '../product-component/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  condition: boolean = true;
  constructor() {}
  public books: Array<IBook> = [book1, book2];
  ngOnInit(): void {}

  toggle() {
    this.condition = !this.condition;
  }
  trackByBooks(index: number, item: IBook): number {
    return item.id;
  }
  onAddToCart() {
    this.books.push(book1);
  }
}
