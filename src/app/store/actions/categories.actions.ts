// import { ICategoryResponse } from '@core/models/category-response.model';
// import { Action } from '@ngrx/store';

import { ICategoryResponse } from '@core/models/category-response.model';
import { createAction, props } from '@ngrx/store';

// export const LOAD_CATEGORIES = '[Categories] Load Categories';

// export class LoadCategories implements Action {
//   readonly type = LOAD_CATEGORIES;

//   payload?: any;

//   constructor(payload: ICategoryResponse[]) {
//     this.payload = payload;
//   }
// }

// export type CategoriesActions = LoadCategories;

export const loadCategories = createAction('[Categories] Load Categories');
export const addCategory = createAction('[Categories] Add category', props<ICategoryResponse>());
