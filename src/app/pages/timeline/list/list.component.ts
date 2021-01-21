import {Component, OnInit} from '@angular/core';
import {Timeline} from '../../../model/timeline.type';
import {TimelineService} from '../../../services/timeline.service';
import {ResponseCode} from '../../../data-type/response.type';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  timelineList:Timeline[]=[]

  errMsg =''

  constructor(private timelineService:TimelineService,
              private messageService:NzMessageService,
              ) { }

  ngOnInit(): void {
   this.getDataList()
  }


  private getDataList(){
    this.timelineService.getTimelineList().subscribe(res=>{
      if (res.code==ResponseCode.SUCCESS){
        this.timelineList = res.data
      }else {
        this.errMsg = res.message
      }
    })
  }



  changeDataShow(data:Timeline){
    this.timelineService.putTimelineShow(data.id,data.isShow).subscribe(res=>{
      // console.log(res);
      if (res.code==ResponseCode.SUCCESS){
        this.messageService.success(res.message)
      }else {
        this.messageService.error(res.message)
      }
    })
  }

}
