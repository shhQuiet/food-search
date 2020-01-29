import { Component, OnInit, Input } from "@angular/core";
import { FoodService } from "../food.service";

@Component({
  selector: "food-search",
  templateUrl: "food-search.component.html",
  styleUrls: ["food-search.component.css"]
})

export class FoodSearchComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  ngOnInit() {}

  searchTerm: string

  doSearch() {
    console.log("Searching...");
    this.foodService.find(this.searchTerm);
  }
}
