import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  inlineSVG!: InlineSVGModule;
}
