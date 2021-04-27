import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-reusable-service',
  templateUrl: './reusable-service.component.html',
  styleUrls: ['./reusable-service.component.scss']
})
export class ReusableServiceComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProduct() {
    this.products = this.productService.getProducts()
  }

}
