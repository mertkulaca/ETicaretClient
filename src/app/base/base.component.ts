import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinner:NgxSpinnerService) {}
  
  showSpinner(spinner:Spinner){
    this.spinner.show(spinner)
    setTimeout(()=>{
      this.hideSpinner(spinner)
    },4000)
  }

  hideSpinner(spinner:Spinner) {
    setTimeout(()=>{
      this.spinner.hide(spinner);
    },1000)
    
  }
}


export enum Spinner{
  Climbing = "climbing",
  Atom = "atom",
  Scale = "scale"
}
