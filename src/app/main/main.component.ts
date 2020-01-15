import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
s:DateService
  constructor(s:DateService) { 
    this.s=s
  }

  ngOnInit() {
    console.log(this.s.getDate())
  }

}
