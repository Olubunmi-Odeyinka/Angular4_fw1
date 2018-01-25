import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationModule} from "./location/location.module";
import {TodoModule} from "./todo/todo.module";
import {WorkShellComponent} from "./work-shell/work-shell.component";
import {WorkRoutingModule} from "./work-routing.module";


@NgModule({
  imports: [
    CommonModule,
    LocationModule,
    TodoModule,
    WorkRoutingModule
  ],
  exports: [
    CommonModule, LocationModule, TodoModule
  ],
  declarations: [WorkShellComponent]
})
export class WorkModule { }


