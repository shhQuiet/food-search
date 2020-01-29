import { Component, OnInit, Input } from "@angular/core";
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

  columnsToDisplay = ['description', 'brandOwner'];

  doSearch() {
    console.log("Searching...");
    this.foodService.find(this.searchTerm).subscribe(
      (data: FoodSearchResult) =>
        (this.results = data)
    );
  }
}
