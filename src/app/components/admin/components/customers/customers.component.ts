import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent implements OnInit {
constructor( show: NgxSpinnerService){
  super(show);
}
  ngOnInit(): void {
    this.showSpinner(Spinner.Scale);
  }
}
