import { Component, OnInit, Input } from '@angular/core';
import {DataListStateService} from "../../../services/data-list-state.service";
import 'rxjs/Rx';

@Component({
  selector: 'fw-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data : {spec: any};
  specKeys : any[];
  orderByField: string;
  isAcending: boolean;
  value: any[];
  dataLoaded = false;
  dataListObservable:any;

  constructor(private state : DataListStateService) {
  }


  ngOnInit() {
    this.orderByField = this.state.getOrderbyField();
    this.isAcending = this.state.getIsAcending();
    this.dataListObservable = this.state.getDataList();

    this.state.loadDataList();

    this.dataListObservable = this.state.getDataList();

    this.dataListObservable
    .subscribe((response) => {
      if(response){
        this.dataLoaded = true;
        this.value = response.json().data;
      }
     },
     (error)=>{
       this.dataLoaded = true;
     });

    if(this.data.spec){
      this.specKeys = Object.keys(this.data.spec);
    }
  }

   setOrderByField(orderField){
     this.state.setOrderbyField(orderField, false);

     if(orderField === this.orderByField){
       this.isAcending = !this.isAcending;
     }else{
       this.isAcending = true;
     }
     this.orderByField = this.state.getOrderbyField();
     this.state.setIsAcending(this.isAcending, true);


     this.state.loadDataList();
     this.state.loadDataList();

     this.dataListObservable = this.state.getDataList();

     this.dataListObservable
       .subscribe((response) => {
           if(response){
             this.dataLoaded = true;
             this.value = response.json().data;
           }
         },
         (error)=>{
           this.dataLoaded = true;
         });
   }

  buildTableCellData(value, specs ){
    return {value: value, specs: specs}
  }

  //  getKeys(obj) {
  // var keys = [];
  // for (var k in obj) {
  //   if (!obj.hasOwnProperty(k))
  //     continue;
  //   keys.push(k);
  //   }
  //  return keys;
  // }
}
