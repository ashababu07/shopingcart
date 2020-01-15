import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition, animate} from '@angular/animations'
@Component({
  selector: 'app-imageanimation',
  templateUrl: './imageanimation.component.html',
  styleUrls: ['./imageanimation.component.css'],
  animations:[trigger("moveimage",[state
    ("lower",style({transform:'translateY(100px)'})),
    state
    ("upper",style({transform:'translateY(0px)'})),
    state("left",style({transform:'translateX(100px)'})),
    state("right",style({transform:'translateX(50px)'})),
    state("spin",style({transform:'rotateY(180deg) rotateZ(90deg)'})),
    state("enlarge",style({transform:'scale(1.5'})),
    // transition("lower<=>upper",animate('300ms')),
    // transition("left<=>right",animate('300ms')),
    // transition("upper=>spin",animate('30s')),
    transition("*=>*",animate('3s'))
  ])]

})
export class ImageanimationComponent implements OnInit {
// islowerupper=true

state='upper'
statex="left"
  constructor() { }

  ngOnInit() {
  }
toggle()
{
  // this.islowerupper=!this.islowerupper
this.state=this.state=="upper"?'lower':'upper'
console.log(this.state)

}



// toggle()
// {

// this.statex=this.statex=="left"?'lower':'left'
// console.log(this.statex)

// }
change()
{
  this.state="spin"
}
scale()
{
  this.state='enlarge'
}
}
