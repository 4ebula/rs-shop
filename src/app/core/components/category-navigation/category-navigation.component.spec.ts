import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from '@core/services/category/category.service';
import { Observable } from 'rxjs';

import { CategoryNavigationComponent } from './category-navigation.component';

describe('CategoryNavigationComponent', () => {
  let component: CategoryNavigationComponent;
  let fixture: ComponentFixture<CategoryNavigationComponent>;
  const categoryService: Partial<CategoryService> = {
    getCategories() {
      return new Observable((subscriber) => {
        subscriber.next({
          id: 'test',
          name: 'testName',
          subCategories: [{ id: 'test', name: 'testName' }],
        });
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNavigationComponent],
      providers: [{ provide: CategoryService, useValue: categoryService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
