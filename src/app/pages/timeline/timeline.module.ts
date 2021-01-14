import { NgModule } from '@angular/core';


import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { ListComponent } from './list/list.component';
import {ShareModule} from '../../share/share.module';
import { SaveComponent } from './save/save.component';


@NgModule({
  declarations: [TimelineComponent, ListComponent, SaveComponent],
  imports: [
    ShareModule,
    TimelineRoutingModule
  ],
  exports:[
    ShareModule,
  ]
})
export class TimelineModule { }
