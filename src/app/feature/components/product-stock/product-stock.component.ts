/* eslint-disable prettier/prettier */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-stock',
  template: `
  <p [ngClass]="{
    'absent': !inStock,
    'product': inProduct
    }"> {{ inStock ? 'В наличии' : 'Нет на складе' }}
  </p> `,
  styleUrls: ['./product-stock.component.scss'],
})
export class ProductStockComponent implements OnInit {
  @Input() available!: number;

  @Input() inProduct: boolean = false;

  inStock!: boolean;

  ngOnInit(): void {
    this.inStock = this.available > 2;
  }
}
