import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator,} from '@angular/material/paginator';
import { ListProduct } from 'src/app/contract/list-prodcut';
import { ProductService } from 'src/app/services/common/models/product.service';
import { BaseComponent, Spinner } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, PositionType } from 'src/app/services/admin/alertify.service';

declare var $ : any;

@Component({
  selector: 'app-list-products',
  templateUrl:'./list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent extends BaseComponent implements  OnInit , AfterViewInit{
  constructor(private productService:ProductService,private base:NgxSpinnerService, private alertify:AlertifyService ){
    super(base);
  }
  ngAfterViewInit(): void {
    
  }
    
  displayedColumns: string[] = ['Name', 'Stock', 'Price', 'createDate','updateDate','delete','edit'];
  dataSource :MatTableDataSource<ListProduct> =null

  @ViewChild(MatPaginator) paginator: MatPaginator;
 async getProducts (){
  this.showSpinner(Spinner.Climbing);
  const allProducts : {totalCount:number, products:ListProduct[]} =  await this.productService.read(this.paginator ? this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,()=> this.hideSpinner(Spinner.Climbing),errorMessage=>this.alertify.message(errorMessage,{
     delay:10,
     messageType:MessageType.Error,
     postionType:PositionType.TopRight 
    }));
   
   this.dataSource = new MatTableDataSource<ListProduct>(allProducts.products)
   this.paginator.length = allProducts.totalCount;
  
 }
 delete(id,event){
    const button : HTMLButtonElement = event.srcElement;   
    $(button.parentElement.parentElement.parentElement).fadeOut(1000)

 }
 async pageChanged(){
  await this.getProducts()
 }
 async ngOnInit()  {
 await this.getProducts();
  }


  

}

