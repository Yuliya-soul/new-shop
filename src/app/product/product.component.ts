import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart-list/cart.service';
import { IBook } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  books: IBook[] = [];
  list: IBook[] = [];

  constructor(
    private dataService: ProductService,
    public cartService: CartService
  ) {}

  addItem(name: IBook) {
    this.dataService.addProducts(name);
  }
  ngOnInit() {
    this.books = this.dataService.getProducts();
  }

  onAddToCart(item: IBook) {
    this.list.push(this.cartService.publishData(item));
  }
  addDescription(data: IBook) {
    alert(data.description);
  }
}
