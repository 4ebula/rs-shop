import { Component, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';

import { ProductsService } from '@feature/services/products/products.service';
import { IProduct } from '@feature/models/product.model';
import { ISliderProduct } from '@shared/models/slider.model';
import { PRODUCT_SALES_IDS } from '@feature/utility/product-on-sales';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnDestroy {
  productSliderInfo!: Array<ISliderProduct>[];

  readonly porductOnSales: string[] = PRODUCT_SALES_IDS;

  isLoaded!: Promise<boolean>;

  sub: Subscription = new Subscription();

  constructor(private productServ: ProductsService) {
    this.createInfoForSlider();
  }

  createInfoForSlider(): void {
    const sliderObserable = from(this.porductOnSales).pipe(
      map((id) => this.productServ.getProduct(id)),
      concatAll()
    );
    const sliderInfo: ISliderProduct[] = [];

    const sub = sliderObserable.subscribe({
      next: (res: IProduct) => {
        sliderInfo.push(this.transofmInfo(res));
      },
      complete: () => {
        this.productSliderInfo = [sliderInfo.splice(0, 6), sliderInfo.splice(0, 6), sliderInfo];
        this.isLoaded = Promise.resolve(true);
      },
    });

    this.sub.add(sub);
  }

  transofmInfo = (obj: IProduct): ISliderProduct => {
    const { subCategory, rating, price, id, name, imageUrls } = obj;
    return {
      id,
      name,
      rating,
      price,
      img: imageUrls.length ? imageUrls[0] : './assets/default_preview.jpeg',
      category: subCategory,
    };
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
