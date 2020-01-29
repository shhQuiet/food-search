import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FoodSearchComponent } from "../food-search/food-search.component";
import { FoodDetailComponent } from "../food-detail/food-detail.component";
import { HomeComponent } from "../home/home.component";
import { BannerComponent } from "../banner/banner.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

import { MaterialModule } from "./material-module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "food-search", component: FoodSearchComponent },
  { path: "food-detail/:fcid", component: FoodDetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FoodSearchComponent,
    FoodDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    BannerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
