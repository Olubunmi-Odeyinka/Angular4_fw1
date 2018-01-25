import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {UnsavedGuardService} from "./services/unsaved-guard.service";
import {ErrorComponent} from "./views/error/error.component";
import {CreateFormComponent} from "./views/fake-form/create-form/create-form.component";
import {WorkShellComponent} from "./views/work/work-shell/work-shell.component";

const appRoutes: Routes =[
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path:'createSample', component: CreateFormComponent},

  //{ path: '', canDeactivate:[UnsavedGuardService] , component: GGG},
  //{ path: '', canActivate:[AuthGuardService] , component: GGG},
  //{ path: '', canActivateChild:[AuthGuardService] , component: GGG, children:[
  //  {path:':id/', component: ChildComponent}
  //]},
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: '/error', data:{ message: 'Page not found!'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
