import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProduct(category: string, subCategory: string): Observable<any> {
    return this.http.get(`http://localhost:3004/goods/category/${category}/${subCategory}`);
  }
}
