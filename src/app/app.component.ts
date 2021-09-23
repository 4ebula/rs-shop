import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PopupService } from '@shared/services/popup/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rs-shop';

  popupState$: Observable<boolean> = this.popupService.popupState$;

  constructor(public popupService: PopupService) {}
}
