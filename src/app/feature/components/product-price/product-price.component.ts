import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent implements OnInit {
  @Input() product!: IProduct;

  @Input() isInProduct!: boolean;

  constructor(private elemRef: ElementRef) {}

  ngOnInit(): void {
    if (this.isInProduct) this.elemRef.nativeElement.classList.add('product');
  }

  isAvalable(): boolean {
    return this.product.availableAmount > 0;
  }
}
