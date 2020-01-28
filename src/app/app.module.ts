import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FoodSearchComponent } from "../food-search/food-search.component";
import { MaterialModule } from "./material-module";

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, HelloComponent, FoodSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
