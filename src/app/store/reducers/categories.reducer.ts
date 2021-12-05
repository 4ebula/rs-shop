// import { LoadCategories, LOAD_CATEGORIES } from '../actions/categories.actions';
// import { ICategoryState } from '../store.model';
import { ICategoryResponse } from '@core/models/category-response.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as CategoriesActions from '../actions/categories.actions';
import { initialCategoriesState } from '../state';

// export const initialState: ICategoryState = {
//   loaded: false,
//   data: [],
// };

// export function CategoriesReducer(state = initialState, action: LoadCategories): ICategoryState {
//   switch (action.type) {
//     case LOAD_CATEGORIES: {
//       return {
//         ...state,
//         loaded: true,
//         data: [...state.data, ...action.payload],
//       };
//     }
//     default:
//       return state;
//   }
// }

export const reducer = createReducer(
  initialCategoriesState,
  on(CategoriesActions.loadCategories, (state) => {
    return [...state];
  }),
  on(CategoriesActions.addCategory, (state, payload) => {
    return [...state, payload];
  })
);

export function CategoriesReducer(state: ICategoryResponse[], action: Action) {
  return reducer(state, action);
}
