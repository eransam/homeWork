import { NotifyService } from 'src/app/services/notify.service';
import { environment } from './../../../../environments/environment';
import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public productImagesUrl = environment.productImagesUrl;
    
    public product: ProductModel;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        private router: Router,
        private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }

    async deleteProduct() {
        try {
            const ok = confirm("Are you sure?");
            if(!ok) return;
            await this.productsService.deleteProduct(this.product.id);
            this.notifyService.success("Product has been deleted");
            this.router.navigateByUrl("/products");
        }
        catch(err: any) {
            this.notifyService.error(err);
        }
    }

}
