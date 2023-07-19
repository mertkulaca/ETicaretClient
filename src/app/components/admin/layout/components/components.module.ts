import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersModule } from '../../components/customers/customers.module';
import { OrdersModule } from '../../components/orders/orders.module';
import { ProductsModule } from '../../components/products/products.module';
import { DashboardModule } from '../../components/dashboard/dashboard.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatListModule
  ],exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
