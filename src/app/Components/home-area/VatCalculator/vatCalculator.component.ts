import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MonetaryService } from 'src/app/services/MonetaryService.service';

@Component({
  selector: 'app-vatCalculator',
  templateUrl: './vatCalculator.component.html',
  styleUrls: ['./vatCalculator.component.css']
})
export class vatCalculatorComponent implements OnInit {

    public priceFromTheClaint: number= 0
    public priceWithVat: number= 0
    public TheVat: number= 0   
     public TheOriginalPrice: number= 0



  constructor(private MonetaryService: MonetaryService) { }

  //מה שנרשם בתוך הפונ' הזו מתבצע פעם אחת בעת טעינת הקומפוננטה 
  ngOnInit(): void {
  }
  
//פונ' אשר מקבלת את המשתנה item לאחר שערכו הוא הטקסט שנכתב בתיבת הטקסט בקובץ הhtml 
//ובמידה והערך שווה ל red אנו נכניס את ערך זה למשתנה randomColor שאת משתנה זה הזנו 
//כסטייל של הדיב בקובץ הhtml שזאת אומרת שהדיב במוזכר יצבע באדום 
//ובמידה והערך שונה מred אנו נאפס את ערך המשתנה item 
  public getVatAndNum(): void {
    this.TheOriginalPrice = this.priceFromTheClaint;
    this.priceFromTheClaint = this.MonetaryService.getPrice(this.priceFromTheClaint);
    this.priceWithVat = this.priceFromTheClaint;

    this.priceFromTheClaint = this.MonetaryService.getVat(this.priceFromTheClaint);
     this.TheVat = this.priceFromTheClaint;
     this.priceFromTheClaint = this.TheOriginalPrice;

}

public getJustVat(): number {
    this.priceFromTheClaint = this.MonetaryService.getVat(this.priceFromTheClaint);
    return this.priceFromTheClaint
}

}
