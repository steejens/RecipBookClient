import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FoodFilterService } from "./food-filter.service";
import {FoodService} from "../foods/foods.service"

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrls: ['./food-filter.component.scss']
})
export class FoodFilterComponent implements OnInit {
  types: any = null;
  categories: any = null;
  @Output() onChange = new EventEmitter<any>();


  constructor(private foodFilterService : FoodFilterService, private foodService: FoodService) { }


callCategory(value: any) {
    let type: string = "category";
    this.foodService.setCategorySelected(value);
    this.onChange.emit();
}

callType(value: any) {
    let type: string = "type";
    this.foodService.setTypeSelected(value);
    this.onChange.emit();
}
  ngOnInit(): void {
    this.foodFilterService.getAllCategories().subscribe((response: any)=> {
       this.categories = response.result;
     })
    this.foodFilterService.getAllTypes().subscribe((response: any)=> {
      this.types = response.result;
     })
  }

}
