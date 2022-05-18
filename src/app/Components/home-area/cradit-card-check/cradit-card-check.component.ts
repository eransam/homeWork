import { Component, OnInit } from '@angular/core';
import { drinkTimeService } from '../../../services/drinkTime.service';


@Component({
  selector: 'app-cradit-card-check',
  templateUrl: './cradit-card-check.component.html',
  styleUrls: ['./cradit-card-check.component.css']
})
export class CraditCardCheck implements OnInit {

    public craditCardNumber: number= 0
    public priceWithVat: number= 0
    public TheVat: number= 0   
     public TheOriginalPrice: number= 0



  constructor() { }

  //מה שנרשם בתוך הפונ' הזו מתבצע פעם אחת בעת טעינת הקומפוננטה 
  ngOnInit(): void {
  }


  public checkCraditCardNumber(): void {

    const theCard:string = this.craditCardNumber.toString();
    //תנאי רגקס אשר בודק האם המספר שהוכנס או 15 או 16 מספרים
    const regex = /^(\d{15}|\d{16})$/;
console.log("regex.test(theCard): " , regex.test(theCard));

if ( regex.test(theCard)) {
    alert("your cradit num is fine")
    
} else {
    alert("your cradit num is wrong")
}


  }
}