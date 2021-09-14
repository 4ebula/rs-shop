import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isCategoriesOpened: boolean = false;

  showCategories(event: Event): void {
    this.isCategoriesOpened = true;
    console.log('Clicked');
    console.log(event.target);
  }

  closePopup(): void {
    this.isCategoriesOpened = false;
  }
}
