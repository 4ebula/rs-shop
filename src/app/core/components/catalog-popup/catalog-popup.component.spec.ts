import { CUSTOM_ELEMENTS_SCHEMA, Directive, HostListener, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { CategoryService } from '@core/services/category/category.service';
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

@Directive({
  selector: '[routerLink]',
})
export class StubRouterLinkDirective {
  @Input('routerLink') linkParams: any;

  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('CatalogPopupComponent', () => {
  let component: CatalogPopupComponent;
  let fixture: ComponentFixture<CatalogPopupComponent>;
  const catServTest: Partial<CategoryService> = {
    categories: new BehaviorSubject(mockedCategories),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogPopupComponent, StubRouterLinkDirective],
      providers: [{ provide: CategoryService, useValue: catServTest }],
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
