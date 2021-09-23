import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/category/category.service';
import { ProductsService } from '@feature/services/products/products.service';
import { from, Observable } from 'rxjs';

import { CategoryProductComponent } from './category-product.component';

describe('CategoryProductComponent', () => {
  let component: CategoryProductComponent;
  let fixture: ComponentFixture<CategoryProductComponent>;
  const catServTest: Partial<CategoryService> = {
    getCategories() {
      return new Observable((subscriber) => {
        subscriber.next([
          {
            id: 'TEST',
            name: 'Тест1',
            subCategories: [
              { id: 'TEST1', name: 'Тест11' },
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
    getProducts(id: string, subid: string) {
      return new Observable((subscriber) => {
        subscriber.next([
          {
            id: 'Test',
            name: 'Test',
            imageUrls: [''],
            availableAmount: 1,
            price: 111,
            rating: 5,
            description: 'Test',
            isInCart: false,
            isFavorite: false,
            category: id,
            subCategory: subid,
          },
        ]);
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryProductComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: from([{ category: 'TEST', subCategory: 'TEST1' }]),
          },
        },
        { provide: CategoryService, useValue: catServTest },
        { provide: ProductsService, useValue: prodServTest },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
