import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [CommonModule,MatButtonModule,MatCardModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductsModule {}
