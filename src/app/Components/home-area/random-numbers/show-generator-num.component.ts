import { NotifyService } from '../../../services/notify.service';
import { GeneratorService } from '../../../services/generator.service';
import { Component, OnDestroy } from '@angular/core';
import { filter, map, reduce, scan, Subscription, take, takeLast, takeUntil, takeWhile, toArray } from 'rxjs';

@Component({
    selector: 'app-show-generator-num',
    templateUrl: './show-generator-num.component.html',
    styleUrls: ['./show-generator-num.component.css']
})
export class ShowGeneratorNumComponent implements OnDestroy {

    public min: number;

    public max: number;

    public count:number;

    public checkbox:any;




    private subscription: Subscription;

    public arr: number[] = [];

    constructor(private generator: GeneratorService, private notify: NotifyService) { }

    public start(): void {

        this.count = this.max- this.min;
        this.subscription = this.generator.generate(this.count)
        .subscribe(
            (num: number) => this.arr.push(num),
            (err: any) => this.notify.error(err),
            () => this.notify.success("Observable Completed :-)")
        );
        console.log(this.checkbox);
        

    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
