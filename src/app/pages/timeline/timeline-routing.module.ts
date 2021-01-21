import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import {SaveComponent} from "./save/save.component";

const routes: Routes = [
  {path:'',redirectTo:'list'},
  {path:'list',component:ListComponent},
  {path:'create',component:SaveComponent},
  {path:'update/:id',component:SaveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimelineRoutingModule { }
