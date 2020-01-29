import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

let API_URL = 'https://api.nal.usda.gov/fdc/v1/search?';
let API_KEY = 'fQdyrcR2a4IvRct1IJEDGIwSLzrDA3yjegFEvHlt';

export class FoodService {

  constructor() { }

  find(searchTerm) {
    console.log('in food.service');
    console.log(`Finding ${searchTerm}`);
    let url= `${API_URL}?api_key=${API_KEY}&generalSearchInput=${searchTerm}`;
  }
}