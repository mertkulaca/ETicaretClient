import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) {
      
   }

   message(message:string,title:string, toastrOptions:Partial<Toastroptions> ){
      this.toastr[toastrOptions.messegeType](message,title,{
        positionClass : toastrOptions.position
      })
      this.toastr
   }
}

export class Toastroptions {
  messegeType:MessageType
  position:Position
}

export enum Position {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "top-full-width",
  BottomFullWidth ="toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"
}


export enum MessageType {
  Succes = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}
