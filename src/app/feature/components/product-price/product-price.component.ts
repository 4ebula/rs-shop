import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent implements OnInit {
  @Input() price!: number;

  @Input() rating!: number;

  @Input() isInProduct!: boolean;

  constructor(private elemRef: ElementRef) {}

  ngOnInit(): void {
    if (this.isInProduct) this.elemRef.nativeElement.classList.add('product');
  }

  createArr = (length: number): Array<any> => {
    return Array.from({ length });
  };
}
