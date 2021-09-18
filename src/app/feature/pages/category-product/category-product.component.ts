import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ICategoryResponse, ISubCategories } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { Subscription } from 'rxjs';
import { IBreadcrumbs } from '../../models/breadcrumbs.model';
import { IProduct } from '../../models/product.model';
import { ProductsService } from '../../services/products/products.service';

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

  sub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductsService,
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
        (el: ICategoryResponse) => el.id === data.category,
      ) as ICategoryResponse;
      this.topCategory = topCategory;
      const category = topCategory.subCategories.find(
        (el: ISubCategories) => el.id === data.subCategory,
      ) as ISubCategories;
      this.category = category;
      this.getGoods();
    });
    this.sub.add(sub);
  }

  getGoods(): void {
    const sub = this.productService
      .getProduct(this.topCategory.id, this.category.id)
      .subscribe((response) => {
        this.products = response;
        this.isLoaded = Promise.resolve(true);
      });
    this.sub.add(sub);
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

  createArr = (length: number): Array<any> => {
    return Array.from({ length });
  };
}
