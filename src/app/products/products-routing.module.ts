import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {path: '', component: ProductsComponent, canActivate: [() => inject(AuthGuard).canActivate()], 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
