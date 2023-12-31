import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contract/create-product';

import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListProductsComponent } from './list-products/list-products.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  extends  BaseComponent implements OnInit{
  constructor(base:NgxSpinnerService, private httpClient:HttpClientService){
    super(base);
  }
  ngOnInit(): void {
    

  }

  @ViewChild(ListProductsComponent) ListProductComponents :ListProductsComponent

  createdProduct(createProduct:CreateProduct){
      this.ListProductComponents.getProducts();
  }
}
