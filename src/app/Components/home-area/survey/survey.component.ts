import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

    //פה אנו יוצרים משתנה אשר מקבל ערכים מקומפוננטת האב
    //המשתנה הוא מסוגEventEmitter אשר מדווח את הערך המתקבל
    @Output()
    public report = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    // public reportVeryGood(): void {
    //     this.report.emit("Very Good");
    // }
    
    // public reportMedium(): void {
    //     this.report.emit("Medium");
    // }
    
    // public reportPoor(): void {
    //     this.report.emit("Poor");
    // }

    //פה אנו יוצרים פונ' אשר מקבלת ערך כפרמטר ומדווחת עליו הלאה
    //בקומפוננטה הראשית אשר מזמנת את הקומפוננטה הזו אנו מצרפים לזימון הקומפוננטה את
    // (report)="displaySurveyResult($event)
    //כך: 
    //<app-survey (report)="displaySurveyResult($event)"></app-survey>
    //כאשר ה$event מכיל את הערך שאנו מעבירים בפונ' הזו sendResult 
    //בעזרת הthis.report.emit(result)
    public sendResult(result: string): void {
        this.report.emit(result);
    }

}
