import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  getProducts(category: string, subCategory: string, query?: string): Observable<any> {
    return this.http.get(
      `http://localhost:3004/goods/category/${category}/${subCategory}${query || ''}`
    );
  }

  getProduct(id: string): Observable<any> {
    return this.http
      .get(`http://localhost:3004/goods/item/${id}`)
      .pipe(catchError(() => this.handleError()));
  }

  handleError(): Observable<any> {
    this.router.navigate(['/404']);
    return new Observable();
  }
}
