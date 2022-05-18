import { Component, OnInit } from '@angular/core';
import { drinkTimeService } from './../../../services/drinkTime.service';


@Component({
  selector: 'app-drink-time',
  templateUrl: './drink-time.component.html',
  styleUrls: ['./drink-time.component.css']
})
export class DrinkTimeComponent implements OnInit {

    public photo = "";

  constructor(private drinkTimeService: drinkTimeService) { }

  ngOnInit(): void {
    this.photo = this.drinkTimeService.getDrinkTime();
  }

}
