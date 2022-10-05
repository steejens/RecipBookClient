import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  filters: any = {
    type: '',
    CategoryRefId: '',
  };

  targetUrl: string = "https://localhost:7287/api/Food";


  constructor(  public http: HttpClient) { }
   ngOnInit() {}


  setTypeSelected(type: any){
    if (type == "all"){
      this.filters.TypeRefId = "";
    }else{
      this.filters.TypeRefId = type;
    }


  }
  setCategorySelected(category: any){
    if (category == "all"){
      this.filters.CategoryRefId = "";
    }else{
      this.filters.CategoryRefId = category;
    }
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
}
