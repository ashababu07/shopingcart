import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [CustomerComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CustomerComponent,
    AdminComponent]
 
  
})
export class UserModule { }
