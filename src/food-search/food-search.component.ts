import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material';
import { FoodService } from "../food.service";
import { FoodSearchResult } from '../food-search-result';
import { Food } from '../food';

@Component({
  selector: "food-search",
  templateUrl: "food-search.component.html",
  styleUrls: ["food-search.component.css"]
})
export class FoodSearchComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  ngOnInit() {}

  searchTerm: string;
  results: FoodSearchResult;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnsToDisplay = ['description', 'brandOwner', 'ingredients'];

  doSearch() {
    this.foodService.find(this.searchTerm).subscribe(
      (data: FoodSearchResult) =>
        (this.results = data)
    );
  }
}
