import { Injectable } from '@angular/core';
import { RESPONSE } from '@core/mocked_categories';
import { ICategoryResponse } from '@core/models/category-response.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  response: ICategoryResponse[] = RESPONSE;

  getCategories(): ICategoryResponse[] {
    return this.response;
  }
}
