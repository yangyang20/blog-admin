import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';


@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
