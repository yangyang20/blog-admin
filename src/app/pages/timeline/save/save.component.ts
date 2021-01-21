import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {SimplemdeComponent} from 'ngx-simplemde';
import {FormControl, FormGroup} from '@angular/forms';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {UtilsService} from '../../../services/utils.service';
import {API_CONFIG} from '../../../services/services.module';
import {ResponseCode, ResponseData} from '../../../data-type/response.type';
import {NzMessageService} from 'ng-zorro-antd/message';
import {TimelineService} from '../../../services/timeline.service';
import {ActivatedRoute} from '@angular/router';
import {Timeline} from '../../../model/timeline.type';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.less'],
})
export class SaveComponent implements OnInit{

  @ViewChild('simplemde', { static: true }) private  simplemde: SimplemdeComponent;


  loading:boolean=false

  uploadUrl=''

  formModel = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    image:new FormControl(''),
  });

  constructor(private utilsService:UtilsService,
              @Inject(API_CONFIG)private url:string,
              private message: NzMessageService,
              private timelineService:TimelineService,
              private activceRoute:ActivatedRoute) {
    const id = this.activceRoute.snapshot.paramMap.get("id")
    if (id){
      this.getDataInfo(Number(id))
    }
    this.uploadUrl=this.url+'/upload/upload-img'
  }

  ngOnInit(): void {
    this.simplemde.setOptions('lineNumbers', true);
  }

  submit(){
    let result
    if (this.formModel.value.id){
      this.timelineService.timelineUpdate(this.formModel.value).subscribe(res=>{
        result = res
      })
    }else{
      this.timelineService.timelineCreate(this.formModel.value).subscribe(res=>{
        result = res
      })
    }
    if (result.code===ResponseCode.SUCCESS){
      this.message.success(result.message)
    }else {
      this.message.error(result.message)
    }
    // console.log(this.formModel.value);
  }


  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.uploadResponse(info.file.response)
        this.loading = false;
        break;
      case 'error':
        this.message.error('没有网络');
        this.loading = false;
        break;
    }
  }


  uploadResponse(response: ResponseData,){
    if (response.code == ResponseCode.SUCCESS){
      this.formModel.value.image =response.data
      this.message.success(response.message)
    }else {
      this.message.error(response.message)
    }
  }


  getDataInfo(id:number){
    this.timelineService.getTimelineInfo(id).subscribe(res=>{
      if (res.code==ResponseCode.SUCCESS){
        const data:Timeline = res.data
        this.formModel.patchValue({
          id:data.id,
          title:data.title,
          content:data.content,
          image:data.image
        })
      }else {
        this.message.error(res.message)
      }
    })
  }
}
