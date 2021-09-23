import { Injectable } from '@angular/core';

import { ICart } from '@feature/models/cart.model';

enum StorageItems {
  order = 'order',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storage: Storage = window.localStorage;

  setCartOrder(order: ICart[]) {
    const json = JSON.stringify(order);
    this.storage.setItem(StorageItems.order, json);
  }

  getCartOrder(): ICart[] {
    const storageItem = this.storage.getItem(StorageItems.order);
    return storageItem ? JSON.parse(storageItem) : [];
  }

  clearCartOrder(): void {
    this.storage.removeItem(StorageItems.order);
  }
}
