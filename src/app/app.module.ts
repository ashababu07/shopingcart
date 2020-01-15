import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { UserModule } from './user/user.module';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SellersModule } from './sellers/sellers.module';
import { CrsComponent } from './crs/crs.component';
import { ReactiveformsvalidationComponent } from './reactiveformsvalidation/reactiveformsvalidation.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule } from '@angular/common/http';
import { ProductprojectComponent } from './productproject/productproject.component';
import { CartComponent } from './productproject/cart/cart.component';
import { OpencloseComponent } from './openclose/openclose.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { from } from 'rxjs';
import { ImageanimationComponent } from './imageanimation/imageanimation.component';
import { CregisterationComponent } from './cregisteration/cregisteration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductentryComponent,
    CrsComponent,
    ReactiveformsvalidationComponent,
    UserdataComponent,
    TestComponent,
    MainComponent,
    ProductComponent,
    ProductprojectComponent,
    CartComponent,
    OpencloseComponent,
    ImageanimationComponent,
    CregisterationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    SellersModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
