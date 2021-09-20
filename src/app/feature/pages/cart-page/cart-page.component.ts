import { Component } from '@angular/core';

import { CartService } from '@feature/services/cart/cart.service';
import { ICart } from '@feature/models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  id!: string;

  products: ICart[];

  sum: number = 0;

  constructor(private cartService: CartService) {
    this.products = this.cartService.getItems();
  }

  checkIfCartHasProducts(): boolean {
    return !!this.cartService.getAmountInCart();
  }

  calculateSum(sum: number): void {
    this.sum += sum;
  }
}
