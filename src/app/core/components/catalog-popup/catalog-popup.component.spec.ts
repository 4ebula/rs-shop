import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from '@core/services/category/category.service';
import { BehaviorSubject } from 'rxjs';

import { CatalogPopupComponent } from './catalog-popup.component';

describe('CatalogPopupComponent', () => {
  let component: CatalogPopupComponent;
  let fixture: ComponentFixture<CatalogPopupComponent>;
  const catServTest: Partial<CategoryService> = {
    categories: new BehaviorSubject([
      {
        id: 'Test1',
        name: 'TestName1',
        subCategories: [
          { id: 'SubTest11', name: 'SubTestName11' },
          { id: 'SubTest12', name: 'SubTestName12' },
        ],
      },
      {
        id: 'Test2',
        name: 'TestName2',
        subCategories: [
          { id: 'SubTest12', name: 'SubTestName21' },
          { id: 'SubTest22', name: 'SubTestName22' },
        ],
      },
    ]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogPopupComponent],
      providers: [{ provide: CategoryService, useValue: catServTest }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPopupComponent);
    component = fixture.componentInstance;
    // catServTest.categories?.next({
    //   id: 'Test',
    //   name: 'TestName',
    //   subCategories: [
    //     { id: 'SubTest1', name: 'SubTestName1' },
    //     { id: 'SubTest2', name: 'SubTestName2' },
    //   ],
    // });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
