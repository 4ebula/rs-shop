import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { ICart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new Subject();

  public cartContent$ = this.cart.asObservable();

  private cartContent: ICart[] = [];

  constructor(private storage: LocalStorageService) {
    this.cartContent = this.storage.getCartOrder();
  }

  public addToCart(newProductId: string): void {
    this.cart.next(newProductId);
    this.cartContent.push({ id: newProductId, amount: 1 });
    this.storage.setCartOrder(this.cartContent);
  }

  public findInCart(productId: string): boolean {
    return !!this.cartContent.find((prod) => prod.id === productId);
  }

  public getAmountInCart(): number {
    return this.cartContent.length;
  }

  public getItems(): ICart[] {
    return this.cartContent;
  }
}
