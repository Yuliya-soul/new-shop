import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { IBook } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

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

  ngOnInit(): void {
    this.books = this.dataService.getProducts();
  }

  addItem(name: IBook): void {
    this.dataService.addProducts(name);
  }

  onAddToCart(item: IBook): void {
    this.list.push(this.cartService.publishData(item));
  }

  addDescription(data: IBook): void {
    alert(data.description);
  }
}
