import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent implements OnInit, OnDestroy {
  category!: ICategoryResponse;

  sub: Subscription = new Subscription();

  isLoaded!: Promise<boolean>;

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.changeContent();
    const sub = this.router.events.subscribe((event) => {
      if (event instanceof RouterEvent) {
        this.changeContent();
      }
    });
    this.sub.add(sub);
  }

  changeContent(): void {
    const category = this.router.url.slice(1);
    const sub = this.categoryService.getCategories().subscribe((response) => {
      const currentCategory = response.find((el: ICategoryResponse) => el.id === category);
      this.isLoaded = Promise.resolve(true);
      if (currentCategory === undefined) {
        this.router.navigate(['/404']);
      } else {
        this.category = currentCategory as ICategoryResponse;
      }
    });
    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
