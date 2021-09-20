import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from 'src/app/feature/services/cart/cart.service';

@Component({
  selector: 'app-header-cart-button',
  templateUrl: './header-cart-button.component.html',
  styleUrls: ['./header-cart-button.component.scss'],
})
export class HeaderCartButtonComponent implements OnInit, OnDestroy {
  amountInCart: number = 0;

  private isActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isActive$ = this.isActive.asObservable();

  sub: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.amountInCart = this.cartService.getAmountInCart();
  }

  ngOnInit(): void {
    // eslint-disable-next-line no-plusplus
    this.cartService.cartContent$.subscribe(() => this.amountInCart++);
    const sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isActive.next(event.url === '/cart');
      }
    });
    this.sub.add(sub);
  }

  checkIfCartHasProducts(): boolean {
    return this.amountInCart > 0;
  }

  handleClick(): void {
    this.router.navigate(['/cart']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
