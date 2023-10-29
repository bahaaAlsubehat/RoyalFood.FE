import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part2RoutingModule } from './part2-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MenuComponent,
    CategoryComponent,
    ItemDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    Part2RoutingModule,
    SharedModule,
  ]
})
export class Part2Module { }
