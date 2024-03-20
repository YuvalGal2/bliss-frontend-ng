import { Routes } from '@angular/router';
import {ProductsListComponent} from "./pages/products-list/products-list.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";

export const routes: Routes = [
  {path:"products", component: ProductsListComponent},
  {path:"products/:id", component: ProductDetailsComponent},
  {path:"**", component: ProductsListComponent},

];
