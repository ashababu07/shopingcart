import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveformsvalidation',
  templateUrl: './reactiveformsvalidation.component.html',
  styleUrls: ['./reactiveformsvalidation.component.css']
})
export class ReactiveformsvalidationComponent implements OnInit {
// title='cart';

profile=this.fb.group(
  {
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  }
)
  constructor(private fb:FormBuilder) { 
    this.fb=fb
  }

  ngOnInit() {
  }
save()
{
  console.log()
}
}
