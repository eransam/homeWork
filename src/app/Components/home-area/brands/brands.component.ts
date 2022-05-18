import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

    //כאשר אנו רושמים משתנה כpublic אנו יכולים לזמן אותו מקובץ הhtml  שלנו
    public brands = [
        { id: 1, name: "adidas"},
        { id: 2, name: "nike"},
        { id: 3, name: "puma"},
        { id: 4, name: "vans"},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
