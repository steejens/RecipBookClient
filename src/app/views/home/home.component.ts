import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../components/foods/foods.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodList: any[] = [];

  constructor(private foodService: FoodService) { }

  onChange(filters: any) {
   this.foodService.getAll().subscribe((response: any)=> {
      this.foodList = response.result;
      console.log(this.foodList)
    })
  }

  ngOnInit(): void {
    this.foodService.getAll().subscribe((response: any)=> {
      this.foodList = response.result;
      console.log(this.foodList)
    })
  }

}
