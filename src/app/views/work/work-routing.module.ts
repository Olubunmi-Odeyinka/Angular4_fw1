import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WorkShellComponent} from "./work-shell/work-shell.component";
import {LocationListComponent} from "./location/location-list/location-list.component";
import {LocationCreateComponent} from "./location/location-create/location-create.component";
import {LocationViewComponent} from "./location/location-view/location-view.component";
import {LocationUpdateComponent} from "./location/location-update/location-update.component";
import {LocationDeleteComponent} from "./location/location-delete/location-delete.component";
import {CommonModule} from "@angular/common";
import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {TodoCreateComponent} from "./todo/todo-create/todo-create.component";
import {TodoViewComponent} from "./todo/todo-view/todo-view.component";
import {TodoUpdateComponent} from "./todo/todo-update/todo-update.component";
import {TodoDeleteComponent} from "./todo/todo-delete/todo-delete.component";



const workModuleRoutes: Routes = [


  {path: 'work/todo', component: WorkShellComponent
    , children:[
    {path: '', component: TodoListComponent},
    {path: 'new', component: TodoCreateComponent},
    {path: ':id', component: TodoViewComponent},
    {path: ':id/edit', component: TodoUpdateComponent},
    {path: ':id/delete', component: TodoDeleteComponent} ]
  },
  {path: 'work/location', component: WorkShellComponent
    , children:[
    {path: '', component: LocationListComponent},
    {path: 'new', component: LocationCreateComponent},
    {path: ':id', component: LocationViewComponent},
    {path: ':id/edit', component: LocationUpdateComponent},
    {path: ':id/delete', component: LocationDeleteComponent} ]
  },
  {path: 'work', redirectTo: 'work/location'},

];

@NgModule({
  imports: [
    RouterModule.forChild(workModuleRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
