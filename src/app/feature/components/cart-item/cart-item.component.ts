import { Component, Input, OnInit } from '@angular/core';
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

  product!: IProduct;

  amount!: number;

  isLoaded!: Promise<boolean>;

  constructor(private cartService: CartService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProduct(this.cartItem.id).subscribe((res) => {
      this.product = res;
      this.isLoaded = Promise.resolve(true);
    });
    this.amount = this.cartItem.amount;
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
