import { ServicesService } from '../services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HttpClientModule
    ],
    imports: [
      
    ],
    providers: [ServicesService],
    bootstrap: []
  })
  export class InterfaceModule { }
  