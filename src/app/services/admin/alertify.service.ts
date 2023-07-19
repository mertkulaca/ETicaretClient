import { Injectable } from '@angular/core';
declare var alertify : any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string ,alertifyOption :Partial<AlertifyOptions>){
    alertify.set('notifier','delay', alertifyOption.delay);
    alertify.set('notifier','position', alertifyOption.postionType);
    alertify[alertifyOption.messageType](message);
  }

  dismiss(){
    alertify.dismissAll();
  }
  
    
}

export class AlertifyOptions {
  messageType:MessageType = MessageType.Success;
  postionType : PositionType;
  delay:number = 3
}


export enum MessageType {
  Error = "error",
  Message = "message",
  Success = "success",
  Notify = "notify",
  Warning = "warning",

}
export enum PositionType {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",

}