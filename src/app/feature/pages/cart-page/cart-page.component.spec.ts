import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICart } from '@feature/models/cart.model';
import { CartService } from '@feature/services/cart/cart.service';

import { CartPageComponent } from './cart-page.component';

// const amountInCart: number = 0;
let cartContent: ICart[] = [];

const cartServTest: Partial<CartService> = {
  getAmountInCart(): number {
    return cartContent.length;
  },
  getItems(): ICart[] {
    return cartContent;
  },
};

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartPageComponent],
      providers: [{ provide: CartService, useValue: cartServTest }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if cart has products when cart is empty', () => {
    cartContent = [];
    expect(component.checkIfCartHasProducts()).toBe(false);
  });

  it('should check if cart has products when cart has items', () => {
    cartContent = [{ id: 'test_id', amount: 1 }];
    expect(component.checkIfCartHasProducts()).toBe(true);
  });

  it('should change sum', () => {
    const currentSum = component.sum;
    component.calculateSum(100);
    expect(component.sum).toBe(currentSum + 100);
  });

  it('should render total', () => {
    cartContent = [{ id: 'test_id', amount: 1 }];
    component.sum = 19.751;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sumElement = compiled.querySelectorAll('.total span');
    expect(Array.from(sumElement)[1].textContent?.slice(0, -3)).toBe('19.75');
  });
});
