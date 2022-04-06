import { Component, OnInit } from '@angular/core';
import { IBook } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
  providers: [ProductService],
})
export class ProductComponentComponent implements OnInit {
  books: IBook[] = [];
  constructor(private dataService: ProductService) {}

  addItem(name: IBook) {
    this.dataService.addProducts(name);
  }
  ngOnInit() {
    this.books = this.dataService.getProducts();
  }

  onAddToCart() {
    console.log('add item to list');
  }
}
