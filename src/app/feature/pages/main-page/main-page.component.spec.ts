import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ProductsService } from '@feature/services/products/products.service';

import { MainPageComponent } from './main-page.component';

describe('MainComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  const prodServTest: Partial<ProductsService> = {
    getProduct(id: string) {
      return new Observable((subscriber) => {
        subscriber.next({
          id,
          name: 'Test',
          imageUrls: [''],
          availableAmount: 1,
          price: 111,
          rating: 5,
          description: 'Test',
          isInCart: false,
          isFavorite: false,
          category: 'Test',
          subCategory: 'Test',
        });
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ProductsService, useValue: prodServTest }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
