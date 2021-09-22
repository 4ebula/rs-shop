import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingComponent } from './product-rating.component';

describe('ProductRatingComponent', () => {
  let component: ProductRatingComponent;
  let fixture: ComponentFixture<ProductRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductRatingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select own class name', () => {
    component.rating = 3;
    component.ngOnInit();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.className).toBe('three');
  });
});
