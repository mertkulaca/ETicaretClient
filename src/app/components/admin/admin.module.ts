import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { CustomersModule } from './components/customers/customers.module';
import { OrdersModule } from './components/orders/orders.module';
import { ProductsModule } from './components/products/products.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    AppRoutingModule
  ],exports:[
    LayoutModule,
  ],schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
