import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.scss']
})
export class BasketsComponent extends BaseComponent implements OnInit {
  constructor(base:NgxSpinnerService){
    super(base);
  }
  ngOnInit(): void {
    this.showSpinner(Spinner.Atom)
  }

}
