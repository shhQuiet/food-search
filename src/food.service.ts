import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() { }

  find(string: searchTerm) {
    console.log(`Finding ${searchTerm}`);
  }
}