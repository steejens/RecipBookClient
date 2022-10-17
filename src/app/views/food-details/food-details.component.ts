import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from "../../components/foods/foods.service";
import { faBowlFood, faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

export interface foodDetailsData{
    "foodId": number;
    "title": string;
    "description": string;
    "coverPhoto": string;
    "preparationTime": number;
    "cookingTime": number;
    "servingFor": number;
    "level": {
      "levelId": number;
      "levelValue": number;
    };
    "foodCategory": {
      "catId": number;
      "title": string;
    },
    "foodType": {
      "typeId": number;
      "title": string;
    }
  }

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  faStar = faStar;
  faStarHalf = faStarHalf;
  foodId: any;
  foodDetails: foodDetailsData | undefined;
  cookingInstructions: any;
  foodIngredients: any;
  foodMeasurements: any;
  foodCalories: number = 0;
  numOfStars: any;
  putHalfStar: boolean=false;
  private sub: any;
  constructor(private route: ActivatedRoute,private foodService: FoodService) { }

  getFoodIngredientsAndCalories(){
    this.foodService.getIngredients(this.foodId).subscribe((response: any)=> {
        this.foodIngredients = response.result.ingredients;
        for (let ingredient of this.foodIngredients){
           this.foodService.getMeasurements(ingredient.ingredient.ingredientId,ingredient.unit.unitId).subscribe((response: any)=> {
              this.foodMeasurements = response.result;
              let calculatedKCal = this.foodMeasurements.kCalPer100g;
              if (ingredient.isDeepFried) calculatedKCal = calculatedKCal + calculatedKCal / 2;
              let dummy = ((ingredient.unitCount * this.foodMeasurements.gramPerUnit) / 100) * calculatedKCal;
              if (ingredient.countCalories) this.foodCalories +=dummy;
    });
        }
    });
  }
  setNumOfStars(){
    if (!this.foodDetails) return;
    let level = this.foodDetails.level.levelValue;
    let x = Math.floor(level/2);
    if (level%2!=0) {
      this.putHalfStar=true;
    }

    this.numOfStars = Array(x)
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.foodId = params['id'];
    });
      this.foodService.getById(this.foodId).subscribe((response: any)=> {
        this.foodDetails = response.result;
        this.setNumOfStars();
    });
      this.foodService.getInstructions(this.foodId).subscribe((response: any)=> {
        this.cookingInstructions = response.result.response;
    });
      this.getFoodIngredientsAndCalories();
  }

}
