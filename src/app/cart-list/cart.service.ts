import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook } from '../product/product.model';

@Injectable()
export class CartService {
  condition: boolean = true;
  totalCost!: number;
  totalQuantity!: number;
  private channel = new Subject<IBook>();
  public channel$ = this.channel.asObservable();
  
  publishData(data: any):any {
    this.totalCost =this.totalCost+data.price;
    this.totalQuantity++;
    return  this.channel.next(data);
  }
  toggle() {
    return (this.condition = !this.condition);
  }

 
}
