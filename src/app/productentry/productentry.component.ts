import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { viewClassName } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  productid:string
  productname:string
  productprice:number
  productdescription:string
// productitem:string
productlist:Product[]=[];
  save()
  {
    
 
console.log(this.productid)
console.log(this.productname)
console.log(this.productprice)
console.log(this.productdescription)

let p:Product=new Product(this.productid,this.productname,this.productprice,this.productdescription)
console.log(p) 
 

// localStorage.setItem("1",JSON.stringify(p))
// var productitem=localStorage.getItem("1")
// alert(productitem)
// console.log(p.ProductId)
// console.log(p.ProductName)
// console.log(p.ProductPrice)
// console.log(p.ProductDescription)
// console.log(productitem)
// var pi:[]
var l=localStorage.length
console.log(l)
if(l>=1)
{
 var i=l+1;

  localStorage.setItem(i.toString(),JSON.stringify(p))
  var productitem=localStorage.getItem(i.toString())
  alert(productitem)
   productitem=JSON.parse(productitem)
  
console.log(productitem)
// pi.push(productitem)

  console.log("i",i)
}

else
{
  localStorage.setItem("1",JSON.stringify(p))
  var productitem=localStorage.getItem("1")

  alert(productitem)
}

// for(var i=0;i<localStorage.length;i++)
// {
//   console.log(localStorage.key(i)+"=["+localStorage.getItem(localStorage.key(i))+"]")
//   // console.log(localStorage.getItem(localStorage.key(i)))
// }


}
  view()
  {
    for(var i=0;i<localStorage.length;i++)
{
  // console.log(localStorage.key(i)+"=["+localStorage.getItem(localStorage.key(i))+"]")
  var pr=localStorage.getItem(localStorage.key(i))
console.log(pr)
var p1=JSON.parse(pr)
this.productlist.push(p1)
  // this.productlist.push()
}
  }

}




