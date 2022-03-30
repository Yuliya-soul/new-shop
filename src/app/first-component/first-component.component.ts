import { Component, OnInit } from '@angular/core';
import { FileAccess, IBook } from './first-component.models';

let book1: IBook = {
  id: 1,
  name: "Alice",
  description: '',
  price: 0,
  category: FileAccess.None,
  isAvailable: false
}
let book2: IBook = {
  id: 2,
  name: "Tom",
  description: '',
  price: 0,
  category: FileAccess.Read,
  isAvailable: false
}
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit{
  items =[book1, book2];

  constructor() { }

  ngOnInit(): void {
  }

}
