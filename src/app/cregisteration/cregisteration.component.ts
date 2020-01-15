import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-cregisteration',
  templateUrl: './cregisteration.component.html',
  styleUrls: ['./cregisteration.component.css']
})
export class CregisterationComponent implements OnInit {


customerlist:any[]=[]
obj:object
localcustomer:any[]=[]


customerform=this.crf.group
({
cname:['',Validators.required],
// email:['',Validators.compose([Validators.required,Validators.pattern('^[+91][0-9]{10}')])],
caddress:[''],
mobileno:['',Validators.required],

username:['',Validators.required],
    password:['',Validators.required]

// customerdata:this.crf.group(
//   {
//     username:['',Validators.required],
//     password:['',Validators.required]
    
//   }
// ),

})

  constructor(private crf:FormBuilder) {
    this.crf=crf
   }

  ngOnInit() {
  }

  registeration()
  {
    console.log("aaaaaaaaaaaaaaa")
    console.log(this.customerform)
    // this.customerlist.push(this.crf.control(''));
    // this.customerlist.push(this.crf);
    
    this.customerlist.push(this.customerform.value)
    console.log("list",this.customerlist)
    // console.log("customerlist...............",this.customerlist)
    // console.log(this.customerform.value)
this.obj=this.customerlist
console.log(typeof (this.obj))

var l=localStorage.length
console.log("localstorage",l)
if(l>=1)
{
  var i=l+1
  localStorage.setItem(i.toString(),JSON.stringify(this.customerform.value))
  var o=localStorage.getItem(i.toString())
// this.localstorage.push(localStorage.getItem(i.toString()))
  o=JSON.parse(o)
  console.log("objectlist",o)
  this.localcustomer.push(o)
  console.log(this.localcustomer)
  alert("json")

  for (var j = 0; j < localStorage.length; j++) {
    console.log("aaaaaaaasssss")
    var obj1 = JSON.parse(localStorage.getItem(localStorage.key(j)));
    console.log(obj1.username);
    console.log(obj1.password);
    console.log("localobeject.............",obj1)
    
}


// o=JSON.stringify(o)

  
  // for(let i=1;i<l;i++)
  // {
   /* for(let i of this.customerlist)
    {
     for(let j of this.localstorage)
     {
       if(i.username==j.username)
       {
         console.log("zzzzzzzzzzzz")
         console.log("login succesfully")
        //  alert("login")
       }
       else{
         console.log("error")
        //  alert("error")
       }
     }
    }*/

  // }
}
else{
  
  localStorage.setItem("1",JSON.stringify(this.obj))
  var o=localStorage.getItem("1")
  o=JSON.parse(o)
  alert("json")

  for (var j = 0; j < localStorage.length; j++) {
    console.log("aaaaaaaasssss")
    var obj1 = JSON.parse(localStorage.getItem(j.toString()));
    console
    console.log(obj1.username);
    console.log(obj1.password);
    console.log("localobeject.............",obj1)
    
}

  
}
  }




}
