import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryService } from '@core/services/category/category.service';
import { BehaviorSubject } from 'rxjs';

import { CatalogPopupComponent } from './catalog-popup.component';

const mockedCategories = [
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
];

describe('CatalogPopupComponent', () => {
  let component: CatalogPopupComponent;
  let fixture: ComponentFixture<CatalogPopupComponent>;
  const catServTest: Partial<CategoryService> = {
    categories: new BehaviorSubject(mockedCategories),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogPopupComponent],
      providers: [{ provide: CategoryService, useValue: catServTest }, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get category data OnInit', () => {
    component.ngOnInit();
    expect(component.categories).toEqual(mockedCategories);
  });
});
