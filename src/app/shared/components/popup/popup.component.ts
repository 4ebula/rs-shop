import { Component, HostListener } from '@angular/core';

import { PopupService } from '@shared/services/popup/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @HostListener('click', ['$event.target'])
  hadleClick(target: HTMLElement) {
    if (!target.closest('.container')) {
      this.popupState.closePopup();
    }
  }

  isOpened: boolean = true;

  constructor(private popupState: PopupService) {}

  closePopup(): void {
    this.popupState.closePopup();
  }
}
