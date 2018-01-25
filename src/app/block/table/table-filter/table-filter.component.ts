import { Component, OnInit } from '@angular/core';
import {DataListStateService} from "../../../services/data-list-state.service";

@Component({
  selector: 'fw-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  orderByField = null;
  isAcending = null;

  filterFieldName: string;
  // filterFieldName1: string;
  // filterFieldName2: string;

  filterValue: any;
  // filterValue1: any;
  // filterValue2: any;

  filterOperator: string;
  // filterOperator1: string;
  // filterOperator2: string;
  constructor(private state: DataListStateService) {}

  ngOnInit() {
    this.filterFieldName = this.state.getFilterFieldName(0);
    //this.filterFieldName1 = state.getFilterFieldName(1);
    //this.filterFieldName2 = state.getFilterFieldName(2);

    this.filterValue = this.state.getFilterValue(0);
    //this.filterValue1 = state.getFilterValue(1)
    //this.filterValue2 = state.getFilterValue(2);

    this.filterOperator = this.state.getFilterOperator(0);
    //this.filterOperator1 = state.getFilterOperator(1);
    //this.filterOperator2 = state.getFilterOperator(2);
  }

  setFilterFieldName(){
    this.state.setFilterFieldName(this.filterFieldName, 0, false);
  }
  setFilterValue(){
    this.state.setFilterValue(this.filterValue, 0, false);
  }
  setFilterOperator(){
    this.state.setFilterOperator(this.filterOperator, 0, false);
  }

  filter(){
    this.state.navigateBasedOnLatestState();
  }

}
