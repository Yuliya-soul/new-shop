import { Injectable } from '@angular/core';
import { book1, book2, book3, IBook } from '../models/product.model';

@Injectable()
export class ProductService {
  private books: Array<IBook> = [book1, book2, book3];

  getProducts(): IBook[] {
    return this.books;
  }

  addProducts(name: IBook): void {
    this.books.push(name);
  }
}
