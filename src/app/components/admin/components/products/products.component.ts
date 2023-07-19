import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';

import { HttpClientService } from 'src/app/services/common/http-client.service';

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
}
