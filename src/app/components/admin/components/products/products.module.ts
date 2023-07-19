import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateProductsComponent } from './create-products/create-products.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListProductsComponent } from './list-products/list-products.component';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductsComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:"", component:ProductsComponent}
      ]
    ),
    MatSidenavModule,MatFormFieldModule,
    MatSelectModule,MatInputModule,MatButtonModule,
    MatListModule
  ],exports:[
    ProductsComponent,
    
  ],schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductsModule { }
