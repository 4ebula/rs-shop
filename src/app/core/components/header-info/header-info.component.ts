import { Component } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent {
  iftrue: boolean = false;

  openDropdown(): void {
    this.iftrue = !this.iftrue;
    console.log('Hi There');
  }
}
