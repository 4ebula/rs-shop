import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [PopupComponent, SliderComponent],
  imports: [CommonModule],
  exports: [PopupComponent, SliderComponent],
})
export class SharedModule {}
