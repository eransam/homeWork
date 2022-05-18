import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    //שם הקומפוננטה
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

    public time: any;
    public timerId: any;

    constructor() { }

    // Same as componentDidMount
    ngOnInit(): void {
         //פה אנו מחילים על המשתנה שיצרנו את פונ' הsetInterval 
        this.timerId = window.setInterval(() => {
            const year = new Date().getFullYear();
            const now = new Date();
            //פה אנו יוצרים מערך 
            const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            //פה אנו יוצרים משתנה והערך שיוכנס אליו הוא התאריך העכשיוי
            var d = new Date();
            //פה הערך של d.getMonth() הוא מספרי וכך אנו נקבל את שם החודש המבוקש לפי הערך המספרי המוחזר
            var monthName=months[d.getMonth()];
            this.time = year + " " + monthName;
        }, 1000);
    }

    // Same as componentWillUnmount
    //כאשר הקומפוננטה מושמדת אנו נבטל את הsetInterval
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

    // Similar to componentDidUpdate
    //כשהקומפוננטה משתנת
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Something changed...", changes);
    }

    ngDoCheck(): void {
        console.log("Performs whenever Angular check for changes...");
    }

}
