import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Subject();

  public cartContent$ = this.cart.asObservable();

  private cartContent: ICart[] = [];

  // constructor() { }

  addToCart(newProductId: string): void {
    this.cart.next(newProductId);
    this.cartContent.push({ id: newProductId, amount: 1 });
  }

  findInCart(productId: string): boolean {
    return !!this.cartContent.find((prod) => prod.id === productId);
  }
}
