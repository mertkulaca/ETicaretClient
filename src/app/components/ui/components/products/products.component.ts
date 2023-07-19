import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit{
  constructor(base:NgxSpinnerService){
    super(base);
  }
  ngOnInit(): void {
    this.showSpinner(Spinner.Atom)
  }

}
