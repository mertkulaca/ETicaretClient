import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BaseComponent, Spinner } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:"",component:DashboardComponent}
      ]
    )
  ],exports:[
    DashboardComponent
  ]
})
export class DashboardModule  { 

}
