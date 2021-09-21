import { TestBed } from '@angular/core/testing';

import { ICart } from '@feature/models/cart.model';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should write and read data in storage', () => {
    const data: ICart[] = [
      { id: 'id_1', amount: 1 },
      { id: 'id_2', amount: 2 },
    ];
    service.setCartOrder(data);
    expect(service.getCartOrder()).toEqual(data);
  });
});
