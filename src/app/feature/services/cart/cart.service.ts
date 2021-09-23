import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { ICart } from '../../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartAmount: Subject<number> = new Subject();

  public cartAmount$ = this.cartAmount.asObservable();

  private cartContent: ICart[] = [];

  constructor(private storage: LocalStorageService) {
    this.cartContent = this.storage.getCartOrder();
  }

  public addToCart(newProductId: string): void {
    this.cartContent.push({ id: newProductId, amount: 1 });
    this.cartAmount.next(this.cartContent.length);
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

  public removeItem(id: string): void {
    const itemNum = this.cartContent.findIndex((product) => product.id === id);
    if (itemNum !== -1) {
      this.cartContent.splice(itemNum, 1);
      this.storage.setCartOrder(this.cartContent);
      this.cartAmount.next(this.cartContent.length);
    }
  }

  public changeItemAmount(id: string, amount: number): void {
    let isChanged = false;
    this.cartContent.forEach((product) => {
      if (product.id === id) {
        isChanged = true;
        // eslint-disable-next-line no-param-reassign
        product.amount = amount;
      }
    });
    if (isChanged) {
      this.storage.setCartOrder(this.cartContent);
    }
  }

  epmtyCart(): void {
    this.cartContent = [];
    this.cartAmount.next(0);
    this.storage.clearCartOrder();
  }
}
