import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
model=new Customer(" "," "," "," ")
  // model=new Customer("abc","abc","a@gmail.com","07/11/1998")
  submitted=false
  customerlist
  c:CustomerService
  constructor(c:CustomerService) { 
    this.c=c
  }

  ngOnInit() {
    this.c.getCustomer().subscribe(data=>{
      this.customerlist=data
      console.log(this.customerlist)
  })
//  save()
//  {
// // this.submitted=true
// console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz")
// console.log(this.model.username)
// console.log(this.model.password)
// console.log(this.model.email)
// console.log(this.model.dob)
//  }
  }


  }