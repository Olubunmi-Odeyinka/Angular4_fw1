import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';

import { TableFormComponent } from './table-form/table-form.component';
import { FormComponent } from './form/form.component';
import { CascadeDropdownComponent } from './cascade-dropdown/cascade-dropdown.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DisplayModule} from "../display/display.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule, TableFormComponent, FormComponent, CascadeDropdownComponent
  ],
  declarations: [TableFormComponent, FormComponent, CascadeDropdownComponent]
})
export class FormModule { }
