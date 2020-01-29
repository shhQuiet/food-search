import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FoodSearchComponent } from "../food-search/food-search.component";
import { MaterialModule } from "./material-module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, HttpClientModule ],
  declarations: [AppComponent, FoodSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
