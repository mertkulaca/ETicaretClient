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

import {MatListModule} from '@angular/material/list';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductsComponent,
    ListProductsComponent,
    DeleteDirective
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
    MatListModule,
    ReactiveFormsModule,MatTableModule,MatPaginatorModule,MatDialogModule 
    
  ],exports:[
    ProductsComponent,
    
  ],schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductsModule { }
