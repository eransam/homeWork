import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //פונ' המחזירה אמת או שקר
  public isWeekend(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1;
    //כאשר היום הוא יום ראשון הפונ' תחזיר אמת
    return dayOfWeek === 1;
}

}
