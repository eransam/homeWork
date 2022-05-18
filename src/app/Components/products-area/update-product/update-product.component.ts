import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

    public product: ProductModel;

    public productForm: FormGroup;
    public nameInput: FormControl;
    public priceInput: FormControl;
    public stockInput: FormControl;
    public imageInput: FormControl;

    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        private router: Router,
        private notifyService: NotifyService) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);

            this.nameInput = new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]);
            this.priceInput = new FormControl(this.product.price);
            this.stockInput = new FormControl(this.product.stock);
            this.imageInput = new FormControl();
            this.productForm = new FormGroup({
                nameBox: this.nameInput,
                priceBox: this.priceInput,
                stockBox: this.stockInput,
                imageBox: this.imageInput
            });
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }

    public async update() {
        try {
            this.product.name = this.nameInput.value;
            this.product.price = this.priceInput.value;
            this.product.stock = this.stockInput.value;
            this.product.image = this.imageBoxRef.nativeElement.files[0];
            await this.productsService.updateProduct(this.product);
            this.notifyService.success("Product has been updated");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            this.notifyService.error(err);
        }
    }

}
