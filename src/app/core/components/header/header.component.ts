import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isCategoriesOpened: boolean = false;

  showCategories(): void {
    this.isCategoriesOpened = true;
  }

  closePopup(): void {
    this.isCategoriesOpened = false;
  }
}
