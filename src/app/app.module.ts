import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';

import { ProductListComponent} from './product-list/product-list.component';

import { CartModule } from './cart-list/cart.module';
import { ProductsModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, CartModule,ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
