import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [SliderComponent, MainPageComponent, NotFoundPageComponent, MainCategoryComponent],
  imports: [CommonModule, FeatureRoutingModule],
  exports: [MainPageComponent, NotFoundPageComponent],
})
export class FeatureModule {}
