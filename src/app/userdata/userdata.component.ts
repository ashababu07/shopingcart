import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import{CustomerService} from '../customer.service'

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
model=new Data('','','')
  constructor() { }

  ngOnInit() {
  }

}
