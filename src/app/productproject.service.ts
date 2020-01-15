import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductprojectService {
pro:HttpClient
// productlist1:[]
cart:any[]=[]
sumprice:any[]=[]
  constructor(pro:HttpClient) { 
    this.pro=pro
   
  }
getproductlist()
  {
    return this.pro.get("http://localhost:4200/assets/productproject.json")
    
  }
  getaddtocart()
  {
  
  

   
  }
  
  
}

