import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesService } from './services/services.service';
import { InterfaceComponent } from './interface/interface.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
