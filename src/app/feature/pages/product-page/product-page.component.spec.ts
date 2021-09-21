import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoryService } from '@core/services/category/category.service';
import { ProductsService } from '@feature/services/products/products.service';
import { from, Observable } from 'rxjs';

import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  const catServTest: Partial<CategoryService> = {
    getCategories() {
      return new Observable((subscriber) => {
        subscriber.next([
          {
            id: 'Test1',
            name: 'Тест1',
            subCategories: [
              { id: 'Test11', name: 'Тест11' },
              { id: 'Test12', name: 'Тест12' },
            ],
          },
          {
            id: 'Test2',
            name: 'Тест2',
            subCategories: [
              { id: 'Test21', name: 'Тест21' },
              { id: 'Test22', name: 'Тест22' },
            ],
          },
        ]);
      });
    },
  };
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
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProductPageComponent],
      providers: [
        { provide: CategoryService, useValue: catServTest },
        { provide: ProductsService, useValue: prodServTest },
        {
          provide: ActivatedRoute,
          useValue: {
            data: from([{ category: 'Test1', subCategory: 'Test11' }]),
            params: from([{ id: 'Product' }]),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    if (catServTest.getCategories) catServTest.getCategories();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change image', () => {
    component.changeImage('some value');
    expect(component.currentImage).toBe('some value');
  });

  it('should create paths for breadcrumbs', () => {
    expect(component.generatePaths()).toEqual([
      { path: 'Test1', name: 'Тест1' },
      { path: 'Test11', name: 'Тест11' },
    ]);
  });
});
