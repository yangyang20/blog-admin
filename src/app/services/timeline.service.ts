import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "./services.module";
import {Timeline} from "../model/timeline.type";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ResponseData} from "../data-type/response.type";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http:HttpClient,@Inject(API_CONFIG)private url:string) { }

  timelineCreate(data:Timeline):Observable<ResponseData>{
    return this.http.post(this.url+'/timeline/create',data).pipe(
      map(res=>(res as ResponseData))
    )
  }
}
