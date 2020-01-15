import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
ds:DateService
  constructor(ds:DateService) { 
    this.ds=ds
    console.log("service example")
  }

  ngOnInit() {
    console.log(this.ds.getDate())
  }

}
