import { Component, OnInit } from '@angular/core';
import {Timeline} from '../../../model/timeline.type';
import {TimelineService} from '../../../services/timeline.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  timelineList:Timeline[]=[]


  constructor(private timelineService:TimelineService,
              ) { }

  ngOnInit(): void {
    this.timelineService.getTimelineList().subscribe(res=>{

    })
  }

}
