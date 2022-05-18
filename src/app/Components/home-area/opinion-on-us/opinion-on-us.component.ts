import { Component, OnInit } from '@angular/core';
import { drinkTimeService } from '../../../services/drinkTime.service';


@Component({
  selector: 'opinion-on-us-check',
  templateUrl: './opinion-on-us.component.html',
  styleUrls: ['./opinion-on-us.component.css']
})
export class opinionOnUs implements OnInit {

    public theOpinion:string = ""




  constructor() { }

  //מה שנרשם בתוך הפונ' הזו מתבצע פעם אחת בעת טעינת הקומפוננטה 
  ngOnInit(): void {
  }


  public checkTheOpinion(): void {

    const theOpinion:string = this.theOpinion;
    //תנאי רגקס אשר בודק האם המשתנה הוא מינימום 20 תווים
    const regex = /^([a-zA-Z]{2,})$/;

if ( regex.test(theOpinion)) {
    alert("thenk u")
    
} else {
    alert("u have to writh min 20 cher")
}


  }
}