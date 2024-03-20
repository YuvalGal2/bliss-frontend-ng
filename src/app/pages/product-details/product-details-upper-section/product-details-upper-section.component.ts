import {Component, Input, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CarouselComponent} from "../../../components/carousel/carousel.component";
import {FavoriteButtonComponent} from "../../../components/favorite-button/favorite-button.component";
import {Product} from "../../../models/product.model";
import {FavoritesService} from "../../../services/favorites.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-details-upper-section',
  standalone: true,
    imports: [
        AsyncPipe,
        CarouselComponent,
        FavoriteButtonComponent
    ],
  templateUrl: './product-details-upper-section.component.html',
  styleUrl: './product-details-upper-section.component.scss'
})
export class ProductDetailsUpperSectionComponent implements  OnInit {
  constructor(private favoritesService: FavoritesService, private router:Router) {
  }

  @Input() productData: any = {
    isFavorite: false
  };

  ngOnInit() {
    // real time change of the component in case the fav state is being changed from another place.
    this.favoritesService.getFavChanges().subscribe((change: any) => {
      if (change[0] === this.productData.id) {
        this.productData.isFavorite = change[1];
      }
    })
  }
  onClose(): void {
    this.router.navigate(['/']);
  }
}

