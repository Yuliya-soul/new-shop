import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { IBook } from '../../products/models/product.model';

@Injectable()
export class CartService {
  condition: boolean = true;
  private channel = new Subject<IBook>();
  public channel$ = this.channel.asObservable();
  input!: IBook;
  private sub!: Subscription;
  public booksInBucket: Array<IBook> = [];
  public totalCost = 0;
  totalQuantity = 0;
  emptinessBooks: boolean = false;

  public publishData(data: any): any {
    return this.channel.next(data);
  }

  public toggle(): boolean {
    return (this.condition = !this.condition);
  }
  public getProducts(): Subscription {
    this.sub = this.channel$.subscribe((data: IBook) => {
      this.input = data;

      if (this.booksInBucket.includes(this.input)) {
        this.increaseQuantity(this.input);
      } else {
        this.booksInBucket.push(this.input);
        this.increaseQuantity(this.input);
      }
      this.totalQuantity++;
      this.totalCost = this.totalCost + this.input.price;
    });

    return this.sub;
  }
  public changeQuantity(increased: boolean, item: IBook) {
    if (this.booksInBucket.includes(item)) {
      if (increased == true) {
        this.increaseQuantity(item);
        this.totalQuantity++;
        this.totalCost = this.totalCost + item.price;
      } else {
        let indexOfSelectedBook = this.booksInBucket.indexOf(item);
        if (this.booksInBucket[indexOfSelectedBook].quantity != 0) {
          this.decreaseQuantity(item);
          this.totalQuantity--;
          this.totalCost = this.totalCost - item.price;
        }
        if (this.booksInBucket[indexOfSelectedBook].quantity === 0) {
          this.booksInBucket.splice(indexOfSelectedBook, 1);
          this.totalQuantity = this.totalQuantity - item.quantity;
        }
      }
    }
  }

  private increaseQuantity(input: IBook): void {
    this.booksInBucket[this.booksInBucket.indexOf(input)].quantity++;
  }
  private decreaseQuantity(input: IBook): void {
    this.booksInBucket[this.booksInBucket.indexOf(input)].quantity--;
  }
  public removeProduct(item: IBook) {
    let indexOfSelectedBook = this.booksInBucket.indexOf(item);
    this.totalQuantity = this.totalQuantity - item.quantity;
    this.totalCost = this.totalCost - item.price * item.quantity;
    this.booksInBucket[indexOfSelectedBook].quantity = 0;
    this.booksInBucket.splice(indexOfSelectedBook, 1);
  }
  public isEmptyCart(): boolean {
    if (this.booksInBucket.length !== 0) {
      return (this.emptinessBooks = true);
    } else {
      return (this.emptinessBooks = false);
    }
  }
  public removeAllProducts(): void {
    this.totalCost = 0;
    this.totalQuantity = 0;
    this.booksInBucket.forEach((element) => {
      element.quantity = 0;
    });
    this.booksInBucket.splice(0, this.booksInBucket.length);
  }
}
