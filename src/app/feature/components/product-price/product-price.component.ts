import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent {
  @Input() price!: number;

  @Input() rating!: number;

  @Input() isInCategory!: boolean;

  createArr = (length: number): Array<any> => {
    return Array.from({ length });
  };
}
