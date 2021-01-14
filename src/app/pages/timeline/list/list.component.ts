import { Component, OnInit } from '@angular/core';
import {Timeline} from '../../../model/timeline.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  timelineList:Timeline[]=[]


  constructor() { }

  ngOnInit(): void {
  }

}
