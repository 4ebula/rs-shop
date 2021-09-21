import { Component } from '@angular/core';

import { GeoService } from '@core/services/geo/geo.service';
import { PopupService } from '@core/services/popup/popup.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent {
  isOpened: boolean = false;

  currentLocation = this.geoServices.geo$;

  constructor(private popupService: PopupService, private geoServices: GeoService) {}

  openDropdown(): void {
    this.isOpened = !this.isOpened;
  }

  closeDropdown(): void {
    this.isOpened = false;
  }

  openPopup(): void {
    this.popupService.showPopup();
  }
}
