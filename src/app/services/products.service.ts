import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable, of, switchMap} from "rxjs";
import { Product } from "../models/product.model";
import { FavoritesService } from "./favorites.service"; // Import the FavoritesService

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient, private favoritesService: FavoritesService) { } // Inject FavoritesService

  private readonly apiUrl = environment.apiUrl;

  // getting all the products and injecting the fav property (based on local storage and not from api)
  getAllProducts(): Observable<any> { // Modify the return type to Observable<Product[]>
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      switchMap(products => {
        return this.handleFavProperty(products);
      })
    );
  }

  // going over the products and creating a id array
  // using this is getting the state of each one of the items
  // adding the property
  private handleFavProperty(products: Product[]) {
    const productsIds = products.map(product => product.id);
    const favIds = this.favoritesService.getFavByList(productsIds);
    return this.addFavProperty(products, favIds);
  }

  // change of the object in the array and inserting the state
  private addFavProperty(products: Product[], favIds: Set<number>): Observable<Product[]> { // Change return type to Product[]
     const modifiedProducts = products.map(product => (
      {...product, isFavorite: favIds.has(product.id)
    }));
     return of(modifiedProducts);
  }

  // getting the state of hte specific object we are viewing.
  getProductById(productId: number): Observable<Product> { // Adjusted return type to Observable<Product>
    return this.http.get<Product>(`${this.apiUrl}/products/${productId}`).pipe(
      switchMap(((product: Product) => {
        // convert to a boolean and assign.
        product.isFavorite = !!this.favoritesService.isFav(product.id);
        return of(product);
      })))
  }
}
