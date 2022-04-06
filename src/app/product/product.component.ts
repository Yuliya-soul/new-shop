import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private dataService: ProductService) {}

  addItem(name: IBook) {
    this.dataService.addProducts(name);
  }
  ngOnInit() {
    this.books = this.dataService.getProducts();
  }

  onAddToCart(item: IBook) {
    this.list.push(item);
    console.log('add item to list', this.list);
  }
}
