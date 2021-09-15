import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryService } from '@core/services/category/category.service';

@Component({
  selector: 'app-catalog-popup',
  templateUrl: './catalog-popup.component.html',
  styleUrls: ['./catalog-popup.component.scss'],
})
export class CatalogPopupComponent implements OnInit {
  @HostListener('mouseover', ['$event.target'])
  method(target: any) {
    if (target.closest('.catalog-categories') && target.tagName === 'LI') {
      const id = target.getAttribute('catId');
      this.currentCategory = this.categories.find((el) => el.id === id) as ICategoryResponse;
    }
  }

  categories!: ICategoryResponse[];

  currentCategory!: ICategoryResponse;

  constructor(private elem: ElementRef, private categoryService: CategoryService) {}

  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
    [this.currentCategory] = this.categories.slice(1, 2);
  }
}
