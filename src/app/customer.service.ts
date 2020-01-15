import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
c:HttpClient
  constructor(c:HttpClient) { 
    this.c=c
  }

  getCustomer()
  {
   return this.c.get("http://localhost:4200/assets/customer.json")
    // console.log("product service")
  }
}


 