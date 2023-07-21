import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './components/admin/admin.module';
import { UiModule } from './components/ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        
      
       
    ],
    providers: [provideAnimations(), // required animations providers,
    {provide:"baseUrl", useValue:"https://localhost:7165/api", multi:true},
    provideToastr()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,UiModule, BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
        HttpClientModule
      
    ],schemas:[
      CUSTOM_ELEMENTS_SCHEMA
    ]
      
    
})
export class AppModule { }
