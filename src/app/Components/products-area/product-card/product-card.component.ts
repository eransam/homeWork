import { environment } from './../../../../environments/environment';
import { ProductModel } from './../../../models/product.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

    public productImagesUrl = environment.productImagesUrl;

    @Input()
    public product: ProductModel;

}
