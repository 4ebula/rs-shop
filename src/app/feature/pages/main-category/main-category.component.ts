import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { Subscription } from 'rxjs';
import { IBreadcrumbs } from '../../models/breadcrumbs.model';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent implements OnInit, OnDestroy {
  category!: ICategoryResponse;

  sub: Subscription = new Subscription();

  isLoaded!: Promise<boolean>;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const sub = this.categoryService.getCategories().subscribe((response) => {
        const currentCategory = response.find((el: ICategoryResponse) => el.id === data.category);
        this.isLoaded = Promise.resolve(true);
        if (currentCategory === undefined) {
          this.router.navigate(['/404']);
        } else {
          this.category = currentCategory as ICategoryResponse;
        }
      });
      this.sub.add(sub);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  generatePaths(): IBreadcrumbs[] {
    return [{ path: this.category.id, name: this.category.name }];
  }
}
