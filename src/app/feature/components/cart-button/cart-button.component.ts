import { Component, Input } from '@angular/core';
import { ICartButtonSettings } from '../../models/cart-button-settings.model';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {
  @Input() settings!: ICartButtonSettings;

  generateText(): string {
    return this.settings.amount > 0 ? 'В корзину' : 'Узнать о поступлении';
  }

  generateClass = (): string => {
    // 'cart' : 'absent' 'incart'
    return this.settings.amount > 0 ? '' : 'absent';
  };
}
