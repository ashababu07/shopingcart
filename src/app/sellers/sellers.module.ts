import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration/registeration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports:[RegisterationComponent]


  // export cheyyanam componentine
})
export class SellersModule { }
