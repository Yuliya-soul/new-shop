import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';

import { CartModule } from './cart-list/cart.module';
import { ProductsModule } from './product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
