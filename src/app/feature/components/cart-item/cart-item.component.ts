import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICart } from '@feature/models/cart.model';
import { IProduct } from '@feature/models/product.model';
import { CartService } from '@feature/services/cart/cart.service';
import { ProductsService } from '@feature/services/products/products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: ICart;

  @Output() increaseToll: EventEmitter<number> = new EventEmitter();

  product!: IProduct;

  amount!: number;

  isLoaded!: Promise<boolean>;

  sum!: number;

  constructor(private cartService: CartService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProduct(this.cartItem.id).subscribe((res) => {
      this.product = res;
      this.sum = this.product.price * this.amount;
      this.increaseToll.emit(this.sum);
      this.isLoaded = Promise.resolve(true);
    });
    this.amount = this.cartItem.amount;
  }

  increaseAmount(): void {
    this.amount += 1;
    this.calculateSum(false);
  }

  decreaseAmount(): void {
    if (this.amount > 0) {
      this.amount -= 1;
      this.calculateSum(true);
    }
  }

  calculateSum(decrease: boolean): void {
    this.sum = this.product.price * this.amount;
    this.increaseToll.emit(this.product.price * (decrease ? -1 : 1));
  }

  generateLink(): string {
    return `/${this.product.subCategory}/${this.product.id}`;
  }
}
