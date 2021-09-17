import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupState = new Subject();

  popupState$ = this.popupState.asObservable() as Observable<boolean>;

  showPopup() {
    this.popupState.next(true);
    this.changeOverflow(true);
  }

  closePopup() {
    this.popupState.next(false);
    this.changeOverflow(false);
  }

  changeOverflow = (isOpened: boolean): void => {
    const { body } = document;
    body.style.overflowY = isOpened ? 'hidden' : 'overlay';
  };
}
