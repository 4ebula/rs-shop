import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CategoryNavigationComponent, HeaderInfoComponent],
  imports: [CommonModule, InlineSVGModule.forRoot()],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
