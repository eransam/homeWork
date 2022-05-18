import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MonetaryService  {

    public getPrice(num:number): number {
        const ThePriceWithVat = num*1.17;
        return ThePriceWithVat;
    }

    public getVat(num:number): number {
        const ThePriceWithVat = num*1.17;
        const TheVat = ThePriceWithVat-num;
        return TheVat;
    } 

}