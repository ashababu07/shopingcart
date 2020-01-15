import { Component, OnInit } from '@angular/core';
import { ProductprojectService } from 'src/app/productproject.service';

// import{HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
prolistservice:ProductprojectService
data:any[]

cartprice:any[]=[]

pay
increment:any
sumofprice:number
// cartobject:object[]
  constructor(prolist:ProductprojectService) {
    this.prolistservice=prolist
  }
  

  ngOnInit() {

    console.log("zzzzzzzzzzzzzzzzzzzzzzz")
    this.data=this.prolistservice.cart
    //this.cartprice=this.prolistservice.sumprice
this.sumofprice=0

      for(let i of this.data)
      {
        
        this.sumofprice=this.sumofprice+(i.price*i.quantity)
      }
      console.log(this.sumofprice)
     
    


    
  }
deletecart(i)
{
console.log(this.data)
this.data.splice(this.data.indexOf(i),1)
// this.prolistservice.cart.splice(this.prolistservice.cart.indexOf(i),1)
this.data=this.prolistservice.cart
console.log(i)
console.log(this.data)

i.quantity=i.quantity-1
this.sumofprice=0
for(let i of this.data)
{
  
  this.sumofprice=this.sumofprice-(i.price*i.quantity)
}







// this.sumofprice=0

//       for(let i of this.data)
//       {

        
//         this.sumofprice=this.sumofprice+(i.price*i.quantity)
//       }


}





incre(i)
{ 

  i.quantity=i.quantity+1
// this.increment=i.quantity
this.sumofprice=0
for(let i=0;i<1;i++)
{
  for(let i of this.data)
{
  
  this.sumofprice=this.sumofprice+(i.price*i.quantity)
}
}

}
decre(i)
{ 

i.quantity=i.quantity-1
this.sumofprice=0
for(let i of this.data)
{
  
  this.sumofprice=this.sumofprice-(i.price*i.quantity)
}

}
/*
proceedtopay()
{
let bill=this.data.map(({price})=>price)
console.log(bill)
this.pay=0
for(var i=0;i<bill.length;i++)
{
  this.pay=this.pay+parseInt(bill[i])

}
console.log(this.pay)
}
*/




/*
proceedtopay(i)
{
let bill=this.data.map(({price})=>price)
let qty=this.data.map(({quantity})=>quantity)
console.log(bill)
console.log(qty)
// this.pay=0


this.sumofprice=0
for(let i=0;i<bill.length;i++)
{
  // let s=bill[this.increm]*this.increment
  // consol(e.log(this.increment)

let pric=parseInt(bill[i])
let q=parseInt(qty[i])
console.log("pr",pric)
console.log("qty",q)
   this.sumofprice=this.sumofprice+pric * q
 
}
console.log(this.sumofprice)

}
*/
}