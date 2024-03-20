import {Component, Input} from '@angular/core';
import {Product} from "../../../models/product.model";
import {ProductsListComponent} from "../../products-list/products-list.component";

@Component({
  selector: 'app-product-details-lower-section',
  standalone: true,
  imports: [
    ProductsListComponent
  ],
  templateUrl: './product-details-lower-section.component.html',
  styleUrl: './product-details-lower-section.component.scss'
})
export class ProductDetailsLowerSectionComponent {
  @Input() productData!: Product | null;
}
