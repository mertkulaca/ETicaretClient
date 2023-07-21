import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

import { ProductService } from 'src/app/services/common/models/product.service';

declare  var $ : any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element:ElementRef, private httpClient:ProductService,private _rendered:Renderer2) {
   const button = this._rendered.createElement("button");
   const newContent = document.createTextNode("Delete");
    _rendered.appendChild(button,newContent)
    button.setAttribute("class", "btn btn-outline-danger")
    button.text
    _rendered.appendChild(element.nativeElement, button)
   }
   @Input() id : string;
   @Output() callback : EventEmitter<any> = new EventEmitter;
   @HostListener("click") async onClick(){
    const td : HTMLTableCellElement = this.element.nativeElement;
   await this.httpClient.delete(this.id)
    $(td.parentElement).fadeOut(1000,()=>{
      this.callback.emit();
    })
    
   } 
}
