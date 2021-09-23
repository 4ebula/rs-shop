import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupState: Subject<boolean> = new Subject();

  popupState$ = this.popupState.asObservable();

  private popupSettings: BehaviorSubject<string> = new BehaviorSubject('');

  public popupSettings$ = this.popupSettings.asObservable();

  showPopup(settings?: string) {
    document.body.scrollTop = 0;
    this.popupSettings.next(settings || '');
    this.popupState.next(true);
    this.changeOverflow(true);
  }

  closePopup() {
    this.popupState.next(false);
    this.popupSettings.next('');
    this.changeOverflow(false);
  }

  changeOverflow = (isOpened: boolean): void => {
    const { body } = document;
    body.style.overflowY = isOpened ? 'hidden' : 'overlay';
  };
}
