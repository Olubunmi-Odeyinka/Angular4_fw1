import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, TodoCreateComponent, TodoDeleteComponent, TodoListComponent, TodoViewComponent, TodoUpdateComponent
  ],
  declarations: [TodoCreateComponent, TodoDeleteComponent, TodoListComponent, TodoViewComponent, TodoUpdateComponent]
})
export class TodoModule { }
