import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path: 'itemdetails',
    component:ItemDetailsComponent
  },
  {
    path: 'cart',
    component:CartComponent
  },
  {
    path: 'checkout',
    component:CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part2RoutingModule { }
