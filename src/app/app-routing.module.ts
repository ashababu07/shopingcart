import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserdataComponent } from './userdata/userdata.component';
import { CustomerComponent } from './user/customer/customer.component';
import { CartComponent } from './productproject/cart/cart.component';


const routes: Routes = [{path:"product",component:ProductComponent},
{path:"customer",component:CustomerComponent},
{path:"cart",component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
