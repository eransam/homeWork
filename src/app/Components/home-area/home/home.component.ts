import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public theColor: string = "";


  constructor() { }

  ngOnInit(): void {
    
  }

  public displaySurveyResult(result: string): void {

    this.theColor = result;
}

}
