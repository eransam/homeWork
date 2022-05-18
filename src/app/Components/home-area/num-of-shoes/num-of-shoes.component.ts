import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-of-shoes',
  templateUrl: './num-of-shoes.component.html',
  styleUrls: ['./num-of-shoes.component.css']
})
export class NumOfShoesComponent implements OnInit {

    public number = 350;

  constructor() { }

  ngOnInit(): void {
  }

}
