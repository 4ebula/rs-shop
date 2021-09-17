import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private geo = new Subject();

  public geo$ = this.geo.asObservable();

  geo1!: string;

  constructor(private http: HttpClient) {
    this.getGeo1().subscribe((res) => {
      console.log(res.city.name_ru);
      this.geo1 = res.city.name_ru;
      this.geo.next(res.city.name_ru);
    });
  }

  async getGeo(): Promise<void> {
    const num1 = this.http.get('https://api.sypexgeo.net');
    console.log(num1);
    const response = await fetch('https://api.sypexgeo.net');
    const data = await response.json();
    const city = data.city.name_ru;
    this.geo.next(city);
    return city;
  }

  getGeo1(): Observable<any> {
    return this.http.get('https://api.sypexgeo.net');
  }
}
