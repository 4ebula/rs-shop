import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { ProductStockComponent } from './components/product-stock/product-stock.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { ProductAvailabilityDirective } from './directives/product-availability/product-availability.directive';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    SliderComponent,
    MainPageComponent,
    NotFoundPageComponent,
    MainCategoryComponent,
    CategoryProductComponent,
    BreadcrumbsComponent,
    ProductPageComponent,
    ProductPriceComponent,
    ProductRatingComponent,
    ProductStockComponent,
    CartButtonComponent,
    ProductAvailabilityDirective,
    CartPageComponent,
    CartItemComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, InlineSVGModule.forRoot()],
  exports: [MainPageComponent, NotFoundPageComponent],
})
export class FeatureModule {}
