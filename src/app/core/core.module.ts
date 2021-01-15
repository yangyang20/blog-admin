import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareModule} from '../share/share.module';
import { SimplemdeModule } from 'ngx-simplemde';
import {ServicesModule} from "../services/services.module";
import {httpInterceptorProviders} from "../services/ httpInterceptor";



@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    BrowserAnimationsModule,
    SimplemdeModule.forRoot({}),
    ServicesModule,
  ],
  exports: [
    ShareModule,
    BrowserAnimationsModule,
  ],
  providers:[
    httpInterceptorProviders
  ]
})
export class CoreModule { }
