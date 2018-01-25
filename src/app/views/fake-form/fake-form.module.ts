import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FormModule} from "../../block/form/form.module";
import {TableModule} from "../../block/table/table.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    TableModule
  ],
  declarations: [CreateFormComponent, UpdateFormComponent, DeleteFormComponent, SimpleTableComponent]
})

export class FakeFormModule { }

