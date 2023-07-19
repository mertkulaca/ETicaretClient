import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { AppModule } from 'src/app/app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:"", component:CustomersComponent}
      ]
    )
  ],exports:[
    CustomersComponent
  ]
})
export class CustomersModule { }
