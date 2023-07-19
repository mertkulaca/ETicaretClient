import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './components/admin/admin.module';
import { LayoutComponent } from './components/admin/layout/layout.component';
import { DashboardComponent } from './components/admin/components/dashboard/dashboard.component';
import { HomeComponent } from './components/ui/components/home/home.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent, children:[
    {path:"",component:DashboardComponent},
    {path:"customer", loadChildren : ()=> import("./components/admin/components/customers/customers.module").then(module  => module.CustomersModule)},
    {path:"order", loadChildren: ()=> import("./components/admin/components/orders/orders.module").then(module => module.OrdersModule)},
    {path:"product", loadChildren: ()=> import("./components/admin/components/products/products.module").then(module => module.ProductsModule)}


  ]},
  {path:"",component:HomeComponent},
  {path:"basket",loadChildren:()=>import("./components/ui/components/baskets/baskets.module").then(module => module.BasketsModule)},
  {path:"product", loadChildren:()=> import("./components/ui/components/products/products.module").then(module => module.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
