import { Component, OnInit } from '@angular/core';
import { Productproject } from '../productproject';
import { ProductprojectService } from '../productproject.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productproject',
  templateUrl: './productproject.component.html',
  styleUrls: ['./productproject.component.css']
})
export class ProductprojectComponent implements OnInit {
prolist:ProductprojectService
productlist

// totalamount:string[]=[]

  constructor(prolist:ProductprojectService) {
    this.prolist=prolist
    
   }

  ngOnInit() {
this.prolist.getproductlist().subscribe(data=>{this.productlist=data})

// // let p:ProductprojectService=new ProductprojectService(this.item)
// // console.log("aaaaaaaaaaaaaaaaaaa",p) 
// this.productlist.getaddtocart(data1=>{
//   this.item=data1
// })

console.log(this.prolist.getaddtocart())
  }
addtocart(i)
{
  this.prolist.cart.push(i)//prolist is my service
console.log(this.prolist)
console.log(i)


// this.totalamount.push(i.price)
}


// proceedtopay(i)
// {
  
//   var sum=0
// for(let i of this.totalamount)
// {
 
//   sum=sum+parseInt(i)
//   console.log("aaaaaaaaa",sum)

//   console.log(typeof (i))

//   this.prolist.sumprice.push(sum)
//   console.log(this.prolist)
// }


}




//   console.log(o)
//   this.productlist1.push(o)
//  console.log("ssssssssssss",this.productlist)



 

