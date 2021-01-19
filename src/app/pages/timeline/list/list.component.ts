import {Component, OnInit} from '@angular/core';
import {Timeline} from '../../../model/timeline.type';
import {TimelineService} from '../../../services/timeline.service';
import {ResponseCode} from '../../../data-type/response.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  timelineList:Timeline[]=[]

  errMsg =''

  constructor(private timelineService:TimelineService,
              ) { }

  ngOnInit(): void {
   this.getDataList()
  }


  private getDataList(){
    this.timelineService.getTimelineList().subscribe(res=>{
      if (res.code==ResponseCode.SUCCESS){
        console.log(res.data);
        this.timelineList = res.data
      }else {
        this.errMsg = res.message
      }
    })
  }



  changeDataShow(data:Timeline){
    this.timelineService.putTimelineShow(data.id,data.isShow).subscribe(res=>{
      console.log(res);
    })
  }

}
