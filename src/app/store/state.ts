import { ICategoryResponse } from '@core/models/category-response.model';

export interface AppState {
  categories: ICategoryResponse[];
}

export const initialCategoriesState: ICategoryResponse[] = [
  { id: 'a', name: 'test', subCategories: [{ id: 'b', name: 'subTest' }] },
];
