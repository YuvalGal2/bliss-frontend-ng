import {FavoriteButtonComponent} from "../../../components/favorite-button/favorite-button.component";
import {BedgeComponent} from "../../../components/bedge/bedge.component";
import {FavoritesService} from "../../../services/favorites.service";
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CurrencyPipe, NgStyle, SlicePipe} from "@angular/common";
import {Product} from "../../../models/product.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [
    NgStyle,
    FavoriteButtonComponent,
    CurrencyPipe,
    SlicePipe,
    BedgeComponent
  ],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent implements OnChanges, OnInit{
  constructor(private router: Router, private favoritesService: FavoritesService) {
  }
  @Input({required: true}) product!: Product;

  ngOnInit() {
    this.favoritesService.getFavChanges()
      .subscribe((change: any) => {
        if (change[0] === this.product.id) {
          this.product.isFavorite = change[1];
        }}
      );
  }

  ngOnChanges(): void {
    // just for demo
    this.fakeExclusiveDeal();
  }

  // when life gives you api without the param, make a limoncello
  fakeExclusiveDeal(): void {
    const r = Math.floor(Math.random()*99999);
    if (r % 2 === 0) {
      this.product.exclusive = true;
    }
  }
  viewProduct(id:number): void {
   this.router.navigate([`/products/${id}`]);
  }
}
