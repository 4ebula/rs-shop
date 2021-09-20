import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/feature/services/cart/cart.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Component({
  selector: 'app-header-cart-button',
  templateUrl: './header-cart-button.component.html',
  styleUrls: ['./header-cart-button.component.scss'],
})
export class HeaderCartButtonComponent implements OnInit {
  amountInCart: number = 0;

  constructor(private cartService: CartService, private storage: LocalStorageService) {
    this.amountInCart = this.cartService.getAmountInCart();
  }

  ngOnInit(): void {
    // eslint-disable-next-line no-plusplus
    this.cartService.cartContent$.subscribe(() => this.amountInCart++);
  }

  checkIfCartHasProducts(): boolean {
    return this.amountInCart > 0;
  }
}
