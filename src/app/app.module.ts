import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { FoodFilterComponent } from './components/food-filter/food-filter.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FoodDetailsComponent } from './views/food-details/food-details.component';
@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FoodFilterComponent,
    FoodCardComponent,
    FoodsComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
