import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlideComponent } from './components/slider/slide/slide.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [SliderComponent, MainPageComponent, NotFoundPageComponent, SlideComponent],
  imports: [CommonModule, FeatureRoutingModule],
  exports: [MainPageComponent, NotFoundPageComponent],
})
export class FeatureModule {}
