import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  isAvaliable!: boolean;

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  manageContents(): void {
    if (this.isAvaliable) {
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
    if (this.isAvaliable) {
      if (this.settings.isInCart) {
        this.router.navigate(['/cart']);
      } else {
        this.settings.isInCart = true;
        this.manageContents();
      }
    }
  }

  ngOnInit(): void {
    this.cd.detectChanges();
    this.manageContents();
  }
}
