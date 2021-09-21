import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const DEFAULT_LOCATION = 'Минск';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private geo = new Subject();

  public geo$ = this.geo.asObservable();

  constructor(private http: HttpClient) {
    this.getGeo().subscribe(
      (response) => {
        this.geo.next(response.city.name_ru);
      },
      (error) => {
        this.geo.next(DEFAULT_LOCATION);
        throw error;
      }
    );
  }

  getGeo(): Observable<any> {
    return this.http.get('https://api.sypexgeo.net');
  }
}
