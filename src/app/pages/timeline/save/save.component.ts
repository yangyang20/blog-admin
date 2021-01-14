import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { SimplemdeComponent} from 'ngx-simplemde';
import { FormGroup, FormControl } from '@angular/forms';
import {NzUploadFile} from "ng-zorro-antd/upload";
import {UtilsService} from "../../../services/utils.service";


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.less'],
})
export class SaveComponent implements OnInit{

  @ViewChild('simplemde', { static: true }) private  simplemde: SimplemdeComponent;

  imgUrl:string=''
  loading:boolean=false



  formModel = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    image:new FormControl(''),
  });

  constructor(private utilsService:UtilsService) { }

  ngOnInit(): void {
    this.simplemde.setOptions('lineNumbers', true);
  }

  submit(){
    console.log(this.simplemde);
    console.log(this.formModel.value);
  }

  beforeUpload(){

  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.uploadImg(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.imgUrl = img;
        });
        break;
      case 'error':
        // this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  uploadImg(imgObj:object,callback:(img: string) => void){
    console.log(imgObj);
    this.utilsService.uploadImg(imgObj).subscribe(res=>{
      console.log(res);
    })
  }
}
