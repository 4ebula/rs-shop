import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '@feature/services/cart/cart.service';
import { from } from 'rxjs';

import { CartButtonComponent } from './cart-button.component';

const cartServTest: Partial<CartService> = {
  findInCart(id: string): boolean {
    return id === 'itemIsInCart';
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addToCart(id: string): void {},
};

describe('CartButtonComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartButtonComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
          },
        },
        { provide: CartService, useValue: cartServTest },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    component.settings = { id: 'Test', amount: 2, isInCart: true };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class name', () => {
    component.settings = { id: 'itemIsInCart', amount: 1, isInCart: true };
    component.isAvaliable = true;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.className).toBe('incart');
  });

  it('should put in cart', () => {
    component.settings = { id: 'itemIsInCart', amount: 1, isInCart: false };
    component.isAvaliable = true;
    component.handleClick();
    expect(component.settings.isInCart).toBe(true);
  });
});
