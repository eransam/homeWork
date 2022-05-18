import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

    public item: string = "";
    public randomColor: string = "";



  constructor() { }

  //מה שנרשם בתוך הפונ' הזו מתבצע פעם אחת בעת טעינת הקומפוננטה 
  ngOnInit(): void {
  }
  
//פונ' אשר מקבלת את המשתנה item לאחר שערכו הוא הטקסט שנכתב בתיבת הטקסט בקובץ הhtml 
//ובמידה והערך שווה ל red אנו נכניס את ערך זה למשתנה randomColor שאת משתנה זה הזנו 
//כסטייל של הדיב בקובץ הhtml שזאת אומרת שהדיב במוזכר יצבע באדום 
//ובמידה והערך שונה מred אנו נאפס את ערך המשתנה item 
  public makeOrder(): void {
      if (this.item === "red") {
        this.randomColor = "red";
      }
      else{
    this.item = "";
      }
}

}
