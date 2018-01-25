import { Component, OnInit } from '@angular/core';
import {DataListStateService} from "../../../services/data-list-state.service";

@Component({
  selector: 'fw-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  pagesize: number;
  presentPage: number;
  pageTotal: number = 0;
  itemTotalCount: number = 0;
  dataListObservable:any;

  constructor(private state: DataListStateService) {}

  ngOnInit() {
    this.presentPage = this.state.getPresentPage();
    this.pagesize = this.state.getPageSize();
    this.dataListObservable = this.state.getDataList();

    this.dataListObservable
      .subscribe((response ) => {
          //var theData = response.json();
          this.itemTotalCount = response.count;
        },
        (error)=>{
        });
  }

  pageChange(){
    this.state.setPresentPage(this.presentPage, true);
  }

  pagesizeChange(){
    this.state.setPageSize(this.presentPage, true);
  }

  //This compute the highest page from the total count of filtered item return from the server
  //divided by the page size ...
  getTotalPage(){
    if((this.itemTotalCount % this.pagesize) > 0){
      return ((this.itemTotalCount / this.pagesize) +1);
    }else{
      return (this.itemTotalCount / this.pagesize)
    }
  }

  //Todo: create functions to be called when either of skip, take or pagesize
  //Todo: changes so that the new value is set in dataservice consequently updating the url
  // goToPage(){
  //   this.pageTotal = this.state.setPresentPage(this.presentPage, true) || 0;
  // }
  //
  // setPageSise(){
  //   this.state.setPageSize(this.pagesize, true);
  // }
}
