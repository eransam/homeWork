import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class drinkTimeService {

    public getDrinkTime(): string {
          

        let photo = "orange1.png";
        var myDate = new Date();
        var hour = myDate.getHours();
        console.log("hour: " , hour);
    if (hour>=7 && hour <= 10) {
        photo = "coffe1.png";
    }
        if (hour>12 && hour <=16) {
            photo = "tea1.png";
        } 

        return photo;
   
    }

    }