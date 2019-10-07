import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bgColor: string;
  constructor() { }

  ngOnInit() {
    this.bgColor = 'Green';
  }

  changeBackground(color: string){
    this.bgColor = color;
  }

  changeBackgroundRamdomly(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    this.bgColor = `rgb(${r}, ${g}, ${b})`;
  }

}
