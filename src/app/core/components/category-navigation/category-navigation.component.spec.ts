import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CategoryService } from '@core/services/category/category.service';
import { ICategoryResponse } from '@core/models/category-response.model';
import { CategoryNavigationComponent } from './category-navigation.component';

const mockedCategories: ICategoryResponse[] = [
  {
    id: 'test',
    name: 'testName',
    subCategories: [{ id: 'test', name: 'testName' }],
  },
];

describe('CategoryNavigationComponent', () => {
  let component: CategoryNavigationComponent;
  let fixture: ComponentFixture<CategoryNavigationComponent>;
  const categoryService: Partial<CategoryService> = {
    getCategories() {
      return new Observable((subscriber) => {
        subscriber.next(mockedCategories);
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

  it('should get categories OnInit', () => {
    component.ngOnInit();
    expect(component.categories).toEqual(mockedCategories);
  });
});
