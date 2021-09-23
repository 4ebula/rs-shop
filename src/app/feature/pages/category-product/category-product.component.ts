import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { ICategoryResponse, ISubCategories } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { IBreadcrumbs } from '@feature/models/breadcrumbs.model';
import { IProduct } from '@feature/models/product.model';
import { ProductsService } from '@feature/services/products/products.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit, OnDestroy {
  topCategory!: ISubCategories;

  category!: ISubCategories;

  isLoaded!: Promise<boolean>;

  products!: IProduct[];

  itemsAmount!: number;

  currPageNum: number = 1;

  maxPage!: number;

  readonly itemsPerPage = 5;

  sub: Subscription = new Subscription();

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
      this.getAmount();
    });
    this.sub.add(sub);
  }

  getAmount(): void {
    const sub = this.productService
      .getProducts(this.topCategory.id, this.category.id)
      .subscribe((response) => {
        this.itemsAmount = response.length;
        this.maxPage = this.calculateAmountOfPages();
        this.getGoods();
      });
    this.sub.add(sub);
  }

  getGoods(): void {
    const query = `?start=${this.itemsPerPage * (this.currPageNum - 1)}&count=${this.itemsPerPage}`;
    const sub = this.productService
      .getProducts(this.topCategory.id, this.category.id, query)
      .subscribe((response) => {
        this.products = response;
        this.isLoaded = Promise.resolve(true);
      });
    this.sub.add(sub);
  }

  increasePageNumber(isPageNumIncrease: boolean) {
    this.currPageNum += isPageNumIncrease ? 1 : -1;
    this.getGoods();
  }

  generatePaths = (): IBreadcrumbs[] => {
    return [
      { path: this.topCategory.id, name: this.topCategory.name },
      { path: this.category.id, name: this.category.name },
    ];
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getImage = (product: IProduct): string => {
    return product.imageUrls.length === 0 ? './assets/default_preview.jpeg' : product.imageUrls[0];
  };

  calculateAmountOfPages(): number {
    return Math.ceil((this.itemsAmount + 1) / this.itemsPerPage);
  }
}
