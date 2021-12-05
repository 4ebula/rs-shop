import { Injectable } from '@angular/core';
import { CategoryService } from '@core/services/category/category.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { loadCategories } from './actions/categories.actions';

@Injectable({ providedIn: 'root' })
export class CategoriesEffect {
  constructor(private actions: Actions, private categoryServ: CategoryService) {}

  getCategories: Observable<Action> = createEffect(() => {
    const test = this.actions.pipe(
      ofType(loadCategories),
      tap((res) => console.log(res)),
      take(1)
      // switchMap(() => {
      //   this.categoryServ.getCategories().pipe(take(1));
      // })
    );
    return test;
  });
}
