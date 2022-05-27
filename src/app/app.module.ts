import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/product.module';
import { APP_CONFIG, APP_DI_CONFIG } from './core/services/constant.service';
import {
  GeneratorFactory,
  SESSION_ID,
} from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
    {
      provide: SESSION_ID,
      useFactory: GeneratorFactory(20),
      deps: [GeneratorService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
