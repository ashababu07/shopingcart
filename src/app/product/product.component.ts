import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
p:ProductService
productlist
  constructor(p:ProductService) { 
    this.p=p
  }

  ngOnInit() {
this.p.getProduct().subscribe(data=>{
  this.productlist=data
  // console.log(typeof this.productlist)
  console.log(this.productlist)
  // console.log(data)

})
  }

}
