import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { firstValueFrom } from 'rxjs';
import store from '../redux/store';
import { addProductAction, deleteProductAction, fetchProductsAction, ProductsAction, updateProductAction } from '../redux/products-state';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = store.getState().productsState.products;
        if (products.length === 0) {
            products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
            const action: ProductsAction = fetchProductsAction(products);
            store.dispatch(action);
        }
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        let products = await this.getAllProducts();
        const product = products.find(p => p.id === id);
        return product;
    }

    public async addProduct(product: ProductModel): Promise<ProductModel> {

        // Convert ProductModel into FormData:
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);

        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData));

        store.dispatch(addProductAction(addedProduct));

        return addedProduct;
    }

    public async updateProduct(product: ProductModel): Promise<ProductModel> {
        const formData = new FormData();
        formData.append("id", product.id.toString());
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);

        const updatedProduct = await firstValueFrom(this.http.put<ProductModel>(environment.productsUrl + product.id, formData));

        store.dispatch(updateProductAction(updatedProduct));

        return updatedProduct;
    }

    public async deleteProduct(id: number): Promise<void> {
        await firstValueFrom(this.http.delete(environment.productsUrl + id));
        store.dispatch(deleteProductAction(id));
    }

}

