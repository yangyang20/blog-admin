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

  constructor(private http:HttpClient,@Inject(API_CONFIG)private url:string) { }

  timelineCreate(data:Timeline):Observable<ResponseData>{
    return this.http.post(this.url+'/timeline/create',data).pipe(
      map(res=>(res as ResponseData))
    )
  }

  getTimelineList(param:string=''):Observable<ResponseData>{
    const params = {params: new HttpParams({fromString:param})}
    return this.http.get<ResponseData>(this.url+'',params).pipe(
      map(res=>(res))
    )
  }
}
