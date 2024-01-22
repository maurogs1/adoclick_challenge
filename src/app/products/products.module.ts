import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsModalComponent } from './components/product-details-modal/product-details-modal.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgbModule,

  ]
})
export class ProductsModule { }
