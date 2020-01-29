import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodSearchResult } from './food-search-result';

const API_URL = 'https://api.nal.usda.gov/fdc/v1';
const API_KEY = 'fQdyrcR2a4IvRct1IJEDGIwSLzrDA3yjegFEvHlt';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private http: HttpClient) { }

  find(searchTerm) {
    let url= `${API_URL}/search?api_key=${API_KEY}&generalSearchInput=${searchTerm}`;
    return this.http.get<FoodSearchResult>(url);
  }

  getDetail(foodId: string) {
    let url= `${API_URL}/${foodId}?api_key=${API_KEY}`;
    return this.http.get<FoodSearchResult>(url);
  }
}