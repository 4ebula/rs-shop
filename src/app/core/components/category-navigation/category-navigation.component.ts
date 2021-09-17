import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent implements OnInit, OnDestroy {
  categories!: ICategoryResponse[];

  sub!: Subscription;

  isLoaded!: Promise<boolean>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.sub = this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.isLoaded = Promise.resolve(true);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
