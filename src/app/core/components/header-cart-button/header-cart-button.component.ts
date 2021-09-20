import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/feature/services/cart/cart.service';

@Component({
  selector: 'app-header-cart-button',
  templateUrl: './header-cart-button.component.html',
  styleUrls: ['./header-cart-button.component.scss'],
})
export class HeaderCartButtonComponent implements OnInit {
  amountInCart: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // eslint-disable-next-line no-plusplus
    this.cartService.cartContent$.subscribe(() => this.amountInCart++);
  }

  checkIfCartHasProducts(): boolean {
    return this.amountInCart > 0;
  }
}
