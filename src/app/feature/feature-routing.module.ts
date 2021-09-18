import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
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
  {
    path: 'appliances',
    component: MainCategoryComponent,
    data: { category: 'appliances' },
  },
  {
    path: 'refrigerators',
    component: CategoryProductComponent,
    data: { category: 'appliances', subCategory: 'refrigerators' },
  },
  {
    path: 'cookers',
    component: CategoryProductComponent,
    data: { category: 'appliances', subCategory: 'cookers' },
  },
  {
    path: 'dishwashers',
    component: CategoryProductComponent,
    data: { category: 'appliances', subCategory: 'dishwashers' },
  },
  {
    path: 'freezers',
    component: CategoryProductComponent,
    data: { category: 'appliances', subCategory: 'freezers' },
  },
  { path: 'electronics', component: MainCategoryComponent, data: { category: 'electronics' } },
  {
    path: 'computers-peripherals',
    component: MainCategoryComponent,
    data: { category: 'computers-peripherals' },
  },
  { path: 'furniture', component: MainCategoryComponent, data: { category: 'furniture' } },
  { path: 'hobbies', component: MainCategoryComponent, data: { category: 'hobbies' } },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
