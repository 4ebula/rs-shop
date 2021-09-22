import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRatingComponent } from '@shared/components/product-rating/product-rating.component';
import { PopupComponent } from './components/popup/popup.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [PopupComponent, SliderComponent, ProductRatingComponent],
  imports: [CommonModule],
  exports: [PopupComponent, SliderComponent, ProductRatingComponent],
})
export class SharedModule {}
