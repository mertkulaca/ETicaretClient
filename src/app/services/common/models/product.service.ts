import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contract/create-product';
import { HttpErrorResponse } from '@angular/common/http';
import { ListProduct } from 'src/app/contract/list-prodcut';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClientService) {
   }
   
   create(product:CreateProduct,successCallback?:any, errorsCallback?:(errors:string)=> void){
      this.httpClient.post({
        controller:"products"
      },product).subscribe(result => {
            successCallback();
      },(errors :HttpErrorResponse)=>{
        const _err : Array<{key:string , value:Array<string>}> = errors.error.errors

        let message = "";

        Object.entries(_err).forEach(([key, value])=>{
        console.log(value)
        message += `
          <ul>
          <li> ${value}</li>
          </ul>
        `
       })
       errorsCallback(message)
      })  
   }

  async read(page : number = 0, size:number = 5,successCallback?: ()=> void,errorsCallback?:(errorMessage: string) => void ):Promise<{totalCount:number, products:ListProduct[]}>{
   const promiseData:Promise<{totalCount:number, products:ListProduct[]}> = this.httpClient.get<{totalCount:number, products:ListProduct[]}>({
      controller:"products",
      queryString:`page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallback()).catch((error:HttpErrorResponse) => errorsCallback(error.message));
    return await promiseData
   }

  async delete(id:string){
   const deleteObs : Observable<any> = this.httpClient.delete<any>({
      controller:"products"
    },id)
   await firstValueFrom(deleteObs)
   }

}
