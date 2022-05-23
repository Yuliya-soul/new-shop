import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onDeleted = new EventEmitter<boolean>();
  deleteBooks(){
    this.onDeleted.emit(true);
  }
  change(increased: any) {
    this.onChanged.emit(increased);
  }
}
