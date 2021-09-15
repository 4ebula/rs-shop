import { Injectable } from '@angular/core';
import { RESPONSE } from '@core/mocked_categories';
import { ICategoryResponse } from '@core/models/category-response.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  response: ICategoryResponse[] = RESPONSE;

  static instance: CategoryService;

  constructor() {
    if (!CategoryService.instance) {
      CategoryService.instance = this;
    }
    return CategoryService.instance;
  }

  getCategories(): ICategoryResponse[] {
    return this.response;
  }
}
