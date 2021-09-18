import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryProductComponent } from './pages/category-product/category-product.component';
import { MainCategoryComponent } from './pages/main-category/main-category.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const CATEGORIES = [
  'appliances',
  'electronics',
  'computers-peripherals',
  'furniture',
  'hobbies',
].map((cat) => {
  return { path: cat, component: MainCategoryComponent, data: { category: cat } };
});

const SUB_CATEGORIES = [
  { topCategory: 'appliances', category: 'refrigerators' },
  { topCategory: 'appliances', category: 'cookers' },
  { topCategory: 'appliances', category: 'dishwashers' },
  { topCategory: 'appliances', category: 'freezers' },
  { topCategory: 'appliances', category: 'microwaves' },
  { topCategory: 'appliances', category: 'teapots' },
  { topCategory: 'appliances', category: 'washing-machines' },
  { topCategory: 'appliances', category: 'irons' },
  { topCategory: 'appliances', category: 'vacuum' },
  { topCategory: 'electronics', category: 'mobile' },
  { topCategory: 'electronics', category: 'watches' },
  { topCategory: 'electronics', category: 'tablets' },
  { topCategory: 'electronics', category: 'ebooks' },
  { topCategory: 'electronics', category: 'powerbanks' },
  { topCategory: 'electronics', category: 'cameras' },
  { topCategory: 'electronics', category: 'tvs' },
  { topCategory: 'electronics', category: 'headphones' },
  { topCategory: 'computers-peripherals', category: 'laptops' },
  { topCategory: 'computers-peripherals', category: 'computers' },
  { topCategory: 'computers-peripherals', category: 'consoles' },
  { topCategory: 'computers-peripherals', category: 'hardware' },
  { topCategory: 'computers-peripherals', category: 'peripherals' },
  { topCategory: 'computers-peripherals', category: 'monitors' },
  { topCategory: 'furniture', category: 'sofas' },
  { topCategory: 'furniture', category: 'armchairs' },
  { topCategory: 'furniture', category: 'cabinets' },
  { topCategory: 'furniture', category: 'chairs' },
  { topCategory: 'furniture', category: 'tables' },
  { topCategory: 'furniture', category: 'beds' },
  { topCategory: 'hobbies', category: 'music-instruments' },
  { topCategory: 'hobbies', category: 'books' },
  { topCategory: 'hobbies', category: 'fun-and-rest' },
].map((obj) => {
  return {
    path: obj.category,
    data: { category: obj.topCategory, subCategory: obj.category },
    children: [
      {
        path: '',
        component: CategoryProductComponent,
      },
      {
        path: ':id',
        component: ProductPageComponent,
      },
    ],
  };
});

const routes: Routes = [
  { path: '', component: MainPageComponent },
  // {
  //   path: 'refrigerators',
  //   data: { category: 'appliances', subCategory: 'refrigerators' },
  //   children: [
  //     {
  //       path: '',
  //       component: CategoryProductComponent,
  //     },
  //     {
  //       path: ':id',
  //       component: ProductPageComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'cookers',
  //   component: CategoryProductComponent,
  //   data: { category: 'appliances', subCategory: 'cookers' },
  // },
  // {
  //   path: 'dishwashers',
  //   component: CategoryProductComponent,
  //   data: { category: 'appliances', subCategory: 'dishwashers' },
  // },
  // {
  //   path: 'freezers',
  //   component: CategoryProductComponent,
  //   data: { category: 'appliances', subCategory: 'freezers' },
  // },
  ...SUB_CATEGORIES,
  ...CATEGORIES,
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
