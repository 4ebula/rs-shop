import { Component } from '@angular/core';

import { CartService } from '@feature/services/cart/cart.service';
import { PopupService } from '@shared/services/popup/popup.service';
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

  orderIsReady: boolean = false;

  constructor(private cartService: CartService, private popup: PopupService) {
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

  sendOrder(deliveryOptions: IOrder) {
    console.log(deliveryOptions);
    this.popup.showPopup('order');
    this.cartService.epmtyCart();
  }
}
