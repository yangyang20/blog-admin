import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShareModule} from '../share/share.module';



@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ShareModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule { }
