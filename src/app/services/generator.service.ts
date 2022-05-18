import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    //Observable פונ' שמחזירה מספר מסוג 
    public generate(minMaxNum: number): Observable<number> {

        //כאשר האובייקט הזה מקבל כפרמטר משתנה Observable פה הפונ' שלנו מחזירה אובייקט חדש מסוג 
        //שהוא מספר והמשתנה הזה יכול לדווח לנו את הערכים שהפונק מחזירה לנו  Observer מסוג 
        return new Observable((observer: Observer<number>) => {

            const timerId = setInterval(() => {

                try {
                    const num = Math.floor(Math.random() * minMaxNum);

                    // Report one value:
                    //את הערך המבוקש next  כאן המשתנה שלנו מדווח לנו בעזרת 
                    observer.next(num);


                  //  if (count === 0) {
                   //     clearInterval(timerId);

                        // Report complete: 
                        //כאשר המשתנה שלנו מסיים לדווח לנו את כל הערכים שביקשנו אנו מסיימים את הפעולה שלנו כך
                    //    observer.complete();
                   // }
                }
                catch (err: any) {
                    clearInterval(timerId);

                    // Report error:
                    //וכך משתנה האובסרבבל מדווח שגיאה במידה והקוד שלנו נופל
                    observer.error(err);
                }

            }, 200);

        });

    }


    

}
