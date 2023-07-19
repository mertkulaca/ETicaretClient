import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contract/create-product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClientService) {
   }
   
   create(product:CreateProduct,successCallback?:any){
      this.httpClient.post({
        controller:"products"
      },product).subscribe(result => {
            successCallback();
      })

     
   }
}
