import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path : '',
    pathMatch : "full",
    redirectTo : "products"
  },
  {
    path : 'products',
    component : ProductComponent
  },
  {
    path : 'edit-product',
    component : EditProductComponent
  },
  {
    path : 'add-product',
    component : AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
