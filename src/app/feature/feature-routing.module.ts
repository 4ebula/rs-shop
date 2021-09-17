import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CategoryService } from '@core/services/category/category.service';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// import { AppInjector } from './temp';

// const myService = AppInjector.get(CategoryService);

// function categoryMatcher(url: UrlSegment[]): UrlMatchResult | null {
//   const category = myService.getCategories().find((el) => el.id === url[0].path);
//   return category ? { consumed: url } : null;
// }

const routes: Routes = [
  { path: '', component: MainPageComponent },
  // { matcher: categoryMatcher, component: MainCategoryComponent },
  { path: 'appliances', component: MainCategoryComponent },
  { path: 'electronics', component: MainCategoryComponent },
  { path: 'computers-peripherals', component: MainCategoryComponent },
  { path: 'furniture', component: MainCategoryComponent },
  { path: 'hobbies', component: MainCategoryComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
