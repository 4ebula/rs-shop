import { Component, OnInit } from '@angular/core';
import { ICart } from '@feature/models/cart.model';

import { CartService } from '@feature/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  amount!: number;

  id!: string;

  products: ICart[];

  constructor(private cartService: CartService) {
    this.products = this.cartService.getItems();
    console.log(this.products);
  }

  checkIfCartHasProducts(): boolean {
    return !!this.cartService.getAmountInCart();
  }

  ngOnInit(): void {
    this.amount = this.cartService.getAmountInCart();
  }

  increaseAmount(): void {
    this.amount += 1;
  }

  decreaseAmount(): void {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }
}
