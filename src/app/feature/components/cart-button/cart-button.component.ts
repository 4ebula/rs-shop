import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICartButtonSettings } from '../../models/cart-button-settings.model';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent implements OnInit {
  @Input() settings!: ICartButtonSettings;

  text!: string;

  className!: string;

  constructor(private router: Router) {}

  manageContents(): void {
    if (this.isPresent()) {
      if (this.settings.isInCart) {
        this.className = 'incart';
        this.text = 'В корзине';
      } else {
        this.className = '';
        this.text = 'В корзину';
      }
    } else {
      this.className = 'absent';
      this.text = 'Узнать о поступлении';
    }
  }

  handleClick(): void {
    if (this.isPresent()) {
      if (this.settings.isInCart) {
        this.router.navigate(['/cart']);
      } else {
        this.settings.isInCart = true;
        this.manageContents();
      }
    }
  }

  isPresent(): boolean {
    return this.settings.amount > 0;
  }

  ngOnInit(): void {
    this.manageContents();
  }
}
