import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    // Two-Way binding must be into an empty existing object:
    public product = new ProductModel();

    // Bind to the <input type="file" ... > 
    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>;

    constructor(
        private productsService: ProductsService,
        private router: Router,
        private notifyService: NotifyService) { }

    async add() {
        try {
            this.product.image = this.imageBoxRef.nativeElement.files[0];
            const addedProduct = await this.productsService.addProduct(this.product);
            this.notifyService.success("Product has been added, id: " + addedProduct.id);
            this.router.navigateByUrl("/products");
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }
    
}
