import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconsProviderModule} from '../icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import { NzUploadModule } from 'ng-zorro-antd/upload';
import {SimplemdeModule} from "ngx-simplemde";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzSwitchModule} from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzUploadModule,
    SimplemdeModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzSwitchModule
  ],
  exports:[
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NzBreadCrumbModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzUploadModule,
    SimplemdeModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzSwitchModule,
  ]
})
export class ShareModule { }
