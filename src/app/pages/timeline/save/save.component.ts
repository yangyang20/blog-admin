import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {SimplemdeComponent} from 'ngx-simplemde';
import {FormControl, FormGroup} from '@angular/forms';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {UtilsService} from '../../../services/utils.service';
import {API_CONFIG} from '../../../services/services.module';
import {ResponseCode, ResponseData} from '../../../data-type/response.type';
import {NzMessageService} from 'ng-zorro-antd/message';
import {TimelineService} from '../../../services/timeline.service';


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
    title: new FormControl(''),
    content: new FormControl(''),
    image:new FormControl(''),
  });

  constructor(private utilsService:UtilsService,
              @Inject(API_CONFIG)private url:string,
              private message: NzMessageService,
              private timelineService:TimelineService) {
    this.uploadUrl=this.url+'/upload/upload-img'
  }

  ngOnInit(): void {
    this.simplemde.setOptions('lineNumbers', true);
  }

  submit(){
    this.timelineService.timelineCreate(this.formModel.value).subscribe(res=>{
      if (res.code===ResponseCode.SUCCESS){
        this.message.success(res.message)
      }else {
        this.message.error(res.message)
      }
    })
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
}
