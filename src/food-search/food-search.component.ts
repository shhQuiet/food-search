import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatPaginator, PageEvent } from "@angular/material";
import { FoodService } from "../food.service";
import { FoodSearchResult } from "../food-search-result";
import { Food } from "../food";

@Component({
  selector: "food-search",
  templateUrl: "food-search.component.html",
  styleUrls: ["food-search.component.css"]
})
export class FoodSearchComponent implements OnInit {
  constructor(private foodService: FoodService, private router: Router) {}
  ngOnInit() {
    if (this.searchTerm) {
      this.resetQueryParams();
    }
  }

  searchTerm: string;
  results: FoodSearchResult;
  queryParams: Params = {
    q: ""
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;

  handlePagination(event: PageEvent) {
    this.foodService
      .getPage(event, this.searchTerm)
      .subscribe(data => {
        debugger;
        this.results = data;
        console.log("results", this.results);
      });
  }

  columnsToDisplay = ["description", "brandOwner", "ingredients"];

  resetQueryParams() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { q: this.searchTerm },
      queryParamsHandling: "merge"
    });
  }

  doSearch() {
    this.foodService.find(this.searchTerm).subscribe(data => {
        debugger;
        this.results = data;
        console.log("results", this.results);
      });
    this.resetQueryParams();
  }

  handleResult(data: FoodSearchResult) {
  }
}
