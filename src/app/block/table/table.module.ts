import { NgModule } from '@angular/core';
import { DataAccessService} from '../../services/data-access.service';
import { DisplayModule } from '../display/display.module';

import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableReportComponent } from './table-report/table-report.component';
import {PageModule} from "../page/page.module";

@NgModule({
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    CommonModule, TableComponent, TableFilterComponent, TablePaginationComponent, TableReportComponent
  ],
  declarations: [TableComponent, TableCellComponent, TableFilterComponent, TablePaginationComponent, TableReportComponent]

})
export class TableModule { }
