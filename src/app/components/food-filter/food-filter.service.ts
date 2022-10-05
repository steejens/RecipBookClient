import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodFilterService {

  constructor(  public http: HttpClient) { }
   ngOnInit() {}

   getAllCategories(){
     return  this.http.get("https://localhost:7287/api/Food/category")
   }
   getAllTypes(){
     return  this.http.get("https://localhost:7287/api/Food/type")
   }
}
