import { Component, HostListener, OnDestroy } from '@angular/core';

import { PopupService } from '@shared/services/popup/popup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnDestroy {
  @HostListener('click', ['$event.target'])
  hadleClick(target: HTMLElement) {
    if (!target.closest('.container')) {
      this.popupState.closePopup();
    }
  }

  isOpened: boolean = true;

  settings!: string | undefined;

  sub: Subscription = new Subscription();

  constructor(private popupState: PopupService) {
    this.popupState.popupSettings$.subscribe((res) => {
      this.settings = res;
    });
  }

  closePopup(): void {
    this.popupState.closePopup();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
