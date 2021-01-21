import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_CONFIG, ServicesModule} from './services.module';
import {Timeline} from "../model/timeline.type";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ResponseData} from "../data-type/response.type";

@Injectable({
  providedIn: ServicesModule
})
export class TimelineService {

  constructor(private http:HttpClient,@Inject(API_CONFIG)private url:string) {
    this.url = this.url+'/timeline/'
  }

  timelineCreate(data:Timeline):Observable<ResponseData>{
    return this.http.post(this.url+'create',data).pipe(
      map(res=>(res as ResponseData))
    )
  }

  timelineUpdate(data:Timeline):Observable<ResponseData>{
    return this.http.put<ResponseData>(this.url+'update',data).pipe(
      map(res=>res)
    )
  }

  getTimelineList(param:string=''):Observable<ResponseData>{
    const params = {params: new HttpParams({fromString:param})}
    return this.http.get<ResponseData>(this.url+'list ',params).pipe(
      map(res=>{
        let data  = res.data
        data.forEach(item=>{
          item.isShow = Boolean(item.isShow)
        })
        res.data = data
        return res
      }),

    )
  }

  putTimelineShow(id:number,isShow:boolean):Observable<ResponseData>{
    const params = {
      "id":id,
      "isShow":isShow,
    }
    return this.http.put<ResponseData>(this.url+'put-show',params).pipe(
      map(res=>res)
    )
  }

  getTimelineInfo(id:number):Observable<ResponseData>{
    const params = {params : new HttpParams().set("id",String(id))}
    return this.http.get<ResponseData>(this.url+'get-info',params).pipe(
      map(res=>res)
    )
  }
}
