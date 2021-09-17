import { Component } from '@angular/core';
import { PopupService } from '@core/services/popup.service';
import { Observable } from 'rxjs';

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
