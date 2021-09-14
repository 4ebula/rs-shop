import { Component } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent {
  isOpened: boolean = false;

  openDropdown(): void {
    this.isOpened = !this.isOpened;
  }

  closeDropdown(): void {
    this.isOpened = false;
  }
}
