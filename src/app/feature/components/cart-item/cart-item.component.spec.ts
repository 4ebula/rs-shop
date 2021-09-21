import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICart } from '@feature/models/cart.model';

import { CartService } from '@feature/services/cart/cart.service';
import { ProductsService } from '@feature/services/products/products.service';
import { Observable } from 'rxjs';
import { CartItemComponent } from './cart-item.component';

@Component({
  template: '<app-cart-item [cartItem]="item"></app-cart-item>',
})
class TestHostComponent {
  item: ICart = {
    id: 'Test',
    amount: 1,
  };
}

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  const cartSeviceStub: Partial<CartService> = {};
  const prodServiceStub: Partial<ProductsService> = {
    getProduct(id: string) {
      return new Observable((subscriber) => {
        subscriber.next({
          id,
          name: 'Test',
          imageUrls: ['a', 'b'],
          availableAmount: 1,
          price: 111,
          rating: 5,
          description: 'string',
          isInCart: false,
          isFavorite: false,
          category: 'category',
          subCategory: 'subCategory',
        });
      });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent, TestHostComponent],
      providers: [
        { provide: CartService, useValue: cartSeviceStub },
        { provide: ProductsService, useValue: prodServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = {
      id: 'Test',
      amount: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
