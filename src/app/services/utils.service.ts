import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "./services.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: ServicesModule
})
export class UtilsService {

  constructor(private http:HttpClient,@Inject(API_CONFIG)private url:string) { }

  uploadImg(file){
    const formData = new FormData();
    formData.append('image', file);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
      }),
      body:formData,
    };

   return  this.http.post(this.url+'/upload/upload-img',httpOptions).pipe(
     map(res=>res)
   )
  }
}
