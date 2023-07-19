import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, Spinner } from 'src/app/base/base.component';
import { AlertifyOptions, AlertifyService, MessageType, PositionType } from 'src/app/services/admin/alertify.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit  {
  constructor(private alertifyService:AlertifyService, base:NgxSpinnerService){
    super(base);
  }
  ngOnInit(): void {
    this.showSpinner(Spinner.Scale)
  }
 
  btn(){
    this.alertifyService.message("Eklendi",{
    messageType: MessageType.Success,
    delay:5,
    postionType: PositionType.TopCenter
    })
    
}
}
