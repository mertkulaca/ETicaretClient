import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(base:NgxSpinnerService){
    super(base);
  }
  ngOnInit(): void {
   this.showSpinner(Spinner.Atom)
  }

}
