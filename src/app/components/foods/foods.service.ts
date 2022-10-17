import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  filters: any = {
    TypeRefId: '',
    CategoryRefId: '',
  };

  targetUrl: string = "https://localhost:7287/api/Food";


  constructor(  public http: HttpClient) { }
   ngOnInit() {}


  setTypeSelected(type: any){
      this.filters.TypeRefId = type == "all" ? "": type;
  }

  setCategorySelected(category: any){
      this.filters.CategoryRefId = category == "all" ? "": category;
  }

  getAll(){

    let queryParams = '?';
    Object.keys(this.filters).map(item=> {
      if (this.filters[item])
        queryParams += item + '=' + this.filters[item] + '&';
    })
    this.targetUrl = "https://localhost:7287/api/Food" + queryParams.slice(0, queryParams.length-1);
     return this.http.get(this.targetUrl)
   }
   getById(foodId:string){
      let targetUrl = 'https://localhost:7287/api/Food/foodById?FoodId='+foodId;
      return this.http.get(targetUrl)
   }
   getInstructions(foodId:string){
      let targetUrl = 'https://localhost:7287/api/Food/CookingInstructions?FoodRefId='+foodId;
      return this.http.get(targetUrl)
   }
   getIngredients(foodId:string){
      let targetUrl = 'https://localhost:7287/api/Ingredient/FoodIngredients?FoodId='+foodId;
      return this.http.get(targetUrl)
   }
   getMeasurements(ingredientRefId:string,unitRefId:string){

      let targetUrl = 'https://localhost:7287/api/Ingredient/measurement?IngredientRefId='+ingredientRefId+'&UnitRefId='+unitRefId;
      return this.http.get(targetUrl)
   }
}
