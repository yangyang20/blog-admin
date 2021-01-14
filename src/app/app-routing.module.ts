import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path:'home',loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)},
  {path:'timeline',loadChildren:()=>import('./pages/timeline/timeline.module').then(m=>m.TimelineModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
