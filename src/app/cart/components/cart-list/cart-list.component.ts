import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

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
  isVerdana = true;
  isNavy = true;
  totalQuantity = 0;
  totalCost = 0;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };

  ngOnInit(): void {
    this.cartService.getProducts();
    this.books = this.cartService.booksInBucket;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggle(): void {
    this.condition = this.cartService.toggle();
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalCost = this.cartService.totalCost;
  }
  trackByBooks(index: number, item: IBook): number {
    return item.id;
  }

  onChanged(increased: boolean, item: IBook) {
    this.cartService.changeQuantity(increased, item);
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalCost = this.cartService.totalCost;
  }
  onDeleted(item: IBook) {
    this.cartService.removeProduct(item);
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalCost = this.cartService.totalCost;
  }
}
