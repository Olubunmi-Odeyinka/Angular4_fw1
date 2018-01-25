import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFormComponent } from './table-form/table-form.component';
import { FormAndDisplayTableComponent } from './form-and-display-table/form-and-display-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableFormComponent, FormAndDisplayTableComponent]
})
export class TableformModule { }
