import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStockComponent } from './product-stock.component';

describe('ProductRatingComponent', () => {
  let component: ProductStockComponent;
  let fixture: ComponentFixture<ProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductStockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.available = 3;
    component.ngOnInit();
    expect(component.inStock).toBe(true);
  });

  it('ngOnInit', () => {
    component.available = 0;
    component.ngOnInit();
    expect(component.inStock).toBe(false);
  });
});
