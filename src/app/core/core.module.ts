import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRouterModule } from './core-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryNavigationComponent,
    HeaderInfoComponent,
  ],
  imports: [CommonModule, CoreRouterModule, InlineSVGModule.forRoot()],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
