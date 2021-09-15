import { Component, OnInit } from '@angular/core';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent implements OnInit {
  categories!: ICategoryResponse[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
}
