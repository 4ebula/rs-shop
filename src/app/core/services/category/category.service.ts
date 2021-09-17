import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoryResponse } from '@core/models/category-response.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categories!: BehaviorSubject<ICategoryResponse[]>;

  constructor(private http: HttpClient) {
    this.getCategories().subscribe((response) => {
      this.categories = new BehaviorSubject(response);
    });
  }

  getCategories(): Observable<any> {
    const URL = 'http://localhost:3004/categories';
    return this.http.get(URL);
  }
}
