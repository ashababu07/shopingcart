import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminform=this.ad.group
  ({
  name:['',Validators.required],
  email:['',Validators.compose([Validators.required,Validators.pattern('^[+91][0-9]{10}')])],
  phoneno:['',Validators.required],
 

  admindata:this.ad.group(
    {
houseno:['',Validators.required],
housename:['',Validators.required],
area:['',Validators.required]
    }
  ),


  username:['',Validators.required],
  password:['',Validators.required]


})
  constructor(private ad:FormBuilder) { 
    this.ad=ad
  }

  ngOnInit() {
  }
save1a()
{
  console.log(this.adminform.value)
  console.log("aaaaaaaaaaaazzzzzzzzzzzzzzzzz")
}
}
