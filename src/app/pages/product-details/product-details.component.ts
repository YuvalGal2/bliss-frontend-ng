import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {FavoriteButtonComponent} from "../../components/favorite-button/favorite-button.component";
import {
  ProductDetailsUpperSectionComponent
} from "./product-details-upper-section/product-details-upper-section.component";
import {
  ProductDetailsLowerSectionComponent
} from "./product-details-lower-section/product-details-lower-section.component";
import {ErrorComponent} from "../../components/error/error.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    AsyncPipe,
    CarouselComponent,
    FavoriteButtonComponent,
    ProductDetailsUpperSectionComponent,
    ProductDetailsLowerSectionComponent,
    ErrorComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product$!: Observable<Product>;
  productId!: number;
  constructor(private productsService: ProductsService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.getProductId();
  }

  getProductId(): void {
    this.route.params.subscribe((params:any) => {
      if (params.id) {
        this.productId = params.id
        this.getProductData();
      }
    });
  }

  getProductData():void  {
    this.product$ = this.productsService.getProductById(this.productId)
  }
}
