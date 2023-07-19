import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/contract/create-product';

import { AlertifyService, MessageType, PositionType } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent extends BaseComponent  {
  constructor(private productService:ProductService, base:NgxSpinnerService, private alertify:AlertifyService){
    super(base);
  }

  postProduct(name:HTMLInputElement, price:HTMLInputElement, stock:HTMLInputElement,e){
        e.preventDefault();
        this.showSpinner(Spinner.Climbing) 
        const product = new CreateProduct();
        product.name = name.value;
        product.price = parseFloat(price.value);
        product.stock = parseInt(stock.value);
        
        this.productService.create(product,()=>{
          this.hideSpinner(Spinner.Climbing),
          this.alertify.message("Ürün EKleme Başarılı",{
            delay:5,
            postionType:PositionType.TopRight,
            messageType:MessageType.Success
          })
        })
  }
 
}