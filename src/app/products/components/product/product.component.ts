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
  emptinessBooks!: boolean;
  booksInBucket: IBook[] = [];
  toggleEmptinessBooks!: boolean;

  constructor(
    private dataService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.books = this.dataService.getProducts();
    this.emptinessBooks = this.cartService.emptinessBooks;
    this.booksInBucket = this.cartService.booksInBucket;
  }

  addItem(name: IBook): void {
    this.dataService.addProducts(name);
  }

  onAddToCart(item: IBook): void {
    this.cartService.publishData(item);
    this.emptinessBooks = this.cartService.isEmptyCart();
  }

  addDescription(data: IBook): void {
    alert(data.description);
  }
  public isEmptyCart() {
    this.emptinessBooks = this.cartService.isEmptyCart();
    this.toggleEmptinessBooks = !this.toggleEmptinessBooks;
  }
}
