import { Component } from '@angular/core';

import { CartService } from '@feature/services/cart/cart.service';
import { ICart } from '@feature/models/cart.model';
import { IOrder } from '@feature/models/order.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  id!: string;

  products: ICart[];

  sum: number = 0;

  // SET BACK TO FALSE
  orderIsReady: boolean = true;

  constructor(private cartService: CartService) {
    this.products = this.cartService.getItems();
  }

  checkIfCartHasProducts(): boolean {
    return !!this.cartService.getAmountInCart();
  }

  calculateSum(sum: number): void {
    this.sum += sum;
  }

  submitOrder(): void {
    this.orderIsReady = true;
  }

  // eslint-disable-next-line class-methods-use-this
  sendOrder(deliveryOptions: IOrder) {
    console.log(deliveryOptions);

    // TODO: show popup
    // TODO: empty cart
  }
}
