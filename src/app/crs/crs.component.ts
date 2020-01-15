import { Component, OnInit } from '@angular/core';
import {IPolygon} from './polygon'
@Component({
  selector: 'app-crs',
  templateUrl: './crs.component.html',
  styleUrls: ['./crs.component.css']
})
export class CrsComponent implements OnInit {
  // width="200"
  //  height="100" 
  //  style="border: 10px solid"
   c:CanvasRenderingContext2D
  draw1()
  {
    this.c.fillRect(25,25,100,100)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
