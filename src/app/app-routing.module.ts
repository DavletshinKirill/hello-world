import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {GoodsPageComponent} from './components/goods-page/goods-page.component'
import {GoodsPageCardsComponent} from './components/goods-page-cards/goods-page-cards.component'
import {ProductPageComponent} from "./components/product-page/product-page.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'goods-table',
    component: GoodsPageComponent
  },
  {
    path: '',
    component: GoodsPageCardsComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
