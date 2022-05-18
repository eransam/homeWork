import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

    @Input()
    public productName: string ="";

    //פה אנו יוצרים משתנה אשר יקבל ערכים מקומפוננטת האב בדומה לפרופס ע''י 
    //@Input()
    @Input()
    public price: number = 0;

    constructor() { }

    ngOnInit(): void {
        
    }

}