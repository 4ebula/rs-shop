import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ICategoryResponse, ISubCategories } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { IBreadcrumbs } from '@feature/models/breadcrumbs.model';
import { IProduct } from '@feature/models/product.model';
import { ProductsService } from '@feature/services/products/products.service';
import { PRODUCT_SALES_IDS } from '../../utility/product-on-sales';

enum SwitchButtons {
  'review',
  'feedback',
  'qa',
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  topCategory!: ISubCategories;

  category!: ISubCategories;

  sub: Subscription = new Subscription();

  id!: string;

  isLoaded!: Promise<boolean>;

  product!: IProduct;

  currentImage!: string;

  activeButton: SwitchButtons = 0;

  labels = {
    hasLabel: false,
    onSale: false,
    topRated: false,
  };

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const sub = this.route.data.subscribe((data) => {
      this.getCategories(data);
    });
    this.sub.add(sub);
  }

  changeImage(img: string): void {
    this.currentImage = img;
  }

  getCategories(data: Data): void {
    const sub = this.categoryService.getCategories().subscribe((response) => {
      const topCategory = response.find(
        (el: ICategoryResponse) => el.id === data.category
      ) as ICategoryResponse;
      this.topCategory = topCategory;
      const category = topCategory.subCategories.find(
        (el: ISubCategories) => el.id === data.subCategory
      ) as ISubCategories;
      this.category = category;
      this.getId();
    });
    this.sub.add(sub);
  }

  getId(): void {
    const sub = this.route.params.subscribe((data) => {
      this.id = data.id;
      this.getProduct();
    });
    this.sub.add(sub);
  }

  getProduct(): void {
    const sub = this.productService.getProduct(this.id).subscribe((response) => {
      this.product = response;
      if (response.imageUrls.length === 0) {
        this.product.imageUrls = ['./assets/default_preview.jpeg'];
      }
      [this.currentImage] = this.product.imageUrls;
      this.setLabels();
      this.isLoaded = Promise.resolve(true);
    });
    this.sub.add(sub);
  }

  generatePaths(): IBreadcrumbs[] {
    return [
      { path: this.topCategory.id, name: this.topCategory.name },
      { path: this.category.id, name: this.category.name },
    ];
  }

  setLabels(): void {
    const onSales = PRODUCT_SALES_IDS.find((id) => this.id === id);

    switch (true) {
      case !!onSales:
        this.labels.hasLabel = true;
        this.labels.onSale = true;
        break;
      case this.product.rating === 5:
        this.labels.hasLabel = true;
        this.labels.topRated = true;
        break;
      default:
        break;
    }
  }

  hadleSwitchbutton(num: number): void {
    this.activeButton = num;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
