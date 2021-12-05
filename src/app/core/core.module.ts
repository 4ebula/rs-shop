import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InlineSVGModule } from 'ng-inline-svg';

import { CategoriesReducer } from '../store/reducers/categories.reducer';
import { CategoriesEffect } from '../store/effects';
import { CoreRouterModule } from './core-routing.module';
import { CatalogPopupComponent } from './components/catalog-popup/catalog-popup.component';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCartButtonComponent } from './components/header-cart-button/header-cart-button.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderComponent } from './components/header/header.component';
import { ClosePopupDirective } from './directives/close-popup.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryNavigationComponent,
    HeaderInfoComponent,
    ClosePopupDirective,
    CatalogPopupComponent,
    HeaderCartButtonComponent,
  ],
  imports: [
    CommonModule,
    CoreRouterModule,
    InlineSVGModule.forRoot(),
    StoreModule.forFeature('categories', CategoriesReducer),
    EffectsModule.forFeature([CategoriesEffect]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
