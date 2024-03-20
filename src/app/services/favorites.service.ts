import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {


  constructor() { }

  private favs = new Subject();


  getFavChanges() {
    return this.favs;
  }
  isFav(id: number): string | null {
    return localStorage.getItem(id.toString());
  }
  getFavByList(ids: number[]): Set<number> {
    const favs: Set<number> = new Set();
    ids.forEach((id) => {
      const str = id.toString();
      if (localStorage.getItem(str)) {
        favs.add(id);
      }
    });
    return favs;
  }

  addToFavorites(id:number) {
    localStorage.setItem(id.toString(),"true");
    this.favs.next([id,true]);
  }
  removeFromFavorites(id:number) {
    localStorage.removeItem(id.toString());
    this.favs.next([id,false]);
  }

}
