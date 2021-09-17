import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CatalogPopupComponent } from './components/catalog-popup/catalog-popup.component';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderComponent } from './components/header/header.component';
import { PopupComponent } from './components/popup/popup.component';
import { CoreRouterModule } from './core-routing.module';
import { ClosePopupDirective } from './directives/close-popup.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryNavigationComponent,
    HeaderInfoComponent,
    ClosePopupDirective,
    CatalogPopupComponent,
    PopupComponent,
  ],
  imports: [CommonModule, CoreRouterModule, InlineSVGModule.forRoot()],
  exports: [HeaderComponent, FooterComponent, PopupComponent],
})
export class CoreModule {}
