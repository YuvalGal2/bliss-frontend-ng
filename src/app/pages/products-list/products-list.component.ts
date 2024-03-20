import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {ProductListItemComponent} from "./product-list-item/product-list-item.component";
import {ErrorComponent} from "../../components/error/error.component";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductListItemComponent,
    ErrorComponent
  ],
  providers: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  constructor(private productsService: ProductsService) {}

  products$!: Observable<Product[]>;
  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

}
