import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']


})
export class RegisterationComponent implements OnInit {
  sellerform=this.fb.group(
// sellerform=new FormGroup(
{
//   name:new FormControl(" "),
// item:new FormControl(" "),
// licenseno:new FormControl(" "),
name:['',Validators.required],
item:['',Validators.required],
licenseno:['',Validators.compose([Validators.required,
  Validators.minLength(3),Validators.maxLength(10)])],


personaldata:this.fb.group({
  pname:[''],
  email:['',Validators.compose([Validators.required,
    Validators.pattern('^[a-zA-Z0-9_,+]+@[a-zA-Z]')])],
  phone:['']
// pname:new FormControl(''),
// email:new FormControl(''),
// phone:new FormControl('')
})
})


// name=new FormControl(" ")
// item=new FormControl(" ")
// licenseno=new FormControl(" ")
  constructor(private fb:FormBuilder) { 
    this.fb=fb
  }

  ngOnInit() {
  }
save()
{
  console.log(this.sellerform.value)
}

  // update()
  // {
  //   // this.name.setValue("archana")
  // }

}
