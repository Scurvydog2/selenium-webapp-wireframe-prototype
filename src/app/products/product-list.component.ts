import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { IStep } from './IStep';
import { strict } from 'assert';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  pageTitle = 'Module';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  filteredProducts: IStep[] = [];
  products: IStep[] = [];

  constructor(private productService: ProductService) {}

  selectedLevel;

  addStep(): void {
    this.products = this.products.concat([
      {
        stepType: this.selectedLevel,
        field: '',
        value: '',
        result: null,
      },
    ]);

    console.log(this.products);
  }
  save(): void {
    let testModule:string = `{
      
    }`;
  }
}
