import {Component, Input} from '@angular/core';
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss'
})
export class FavoriteButtonComponent {
  @Input() productId!: number;
  @Input() state!: boolean;
  constructor(private favoritesService: FavoritesService) {}
  toggleFavorite(): void {
    if (this.state) {
      this.favoritesService.removeFromFavorites(this.productId);
    } else {
      this.favoritesService.addToFavorites(this.productId);
    }
    this.state = !this.state;
  }
}
