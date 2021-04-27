import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public getProducts() {
    let products: Product[];

    products = [
      { productID: 1, name: 'Memory Card', price: 500 },
      { productID: 1, name: 'Pen Drive', price: 750 },
      { productID: 1, name: 'Power Bank', price: 100 },
    ];

    return products;
  }
}
