import {Inject, Injectable} from '@angular/core';
import {DataAccessService} from "./data-access.service";
import {Response} from "@angular/http";
import {APP_CONFIG} from '../app.config';
import {Router} from "@angular/router";

@Injectable()
export class DataListStateService {

  //server url
  modelUrl: string = "";
  modelName: string = "";
  modelComponentRoute: string = "";
  //the display data item status and id
   dataList: any = null;
  private selecteditem: any = null;

  //route parameters and pagination filters
  private presentPage: number = 1;
  private pagesize: number = 10;
  private isSearching : boolean= false;

  private fragment: string = null;
  private orderByField: string = null;
  private isAcending:boolean = null;

  private filterFieldName: string =null;
  private filterFieldName1: string =null;
  private filterFieldName2: string =null;

  private filterValue: any =null;
  private filterValue1: any =null;
  private filterValue2: any =null;

  private filterOperator: string =null;
  private filterOperator1: string =null;
  private filterOperator2: string =null;

  constructor(private dataAccess :DataAccessService, private router: Router, @Inject(APP_CONFIG) private constants ) { }

    loadDataList(){
    //Todo: return page total
     var queryUrl =  this.generateQueryStringFromPresentState();

      this.dataList = this.dataAccess.queryServer(queryUrl);
       // .subscribe((response :Response) => {
       //   var theData = response.json();
       //   this.dataList = theData.data;
       //   this.itemTotalCount = theData.count;
       //     dataLoaded = true;
       //  },
       //  (error)=>{
       //
       //    dataLoaded = true;
       //  });
   }

  getDataList(){
    return this.dataList;
  }

  getPageTake(){
    return this.pagesize;
  }

  getPageSkip(){
    return (this.pagesize * (this.presentPage -1));
  }

  setSeletected(item: any, index: number){
    this.selecteditem = item;
  }

  //This is the page number of the present page
  getPresentPage(){
    return this.presentPage;
  }
  setPresentPage(page: number, rerenderpage: boolean){
    if(isNaN(page)){
      return;
    }
    this.presentPage = page * 1;
    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setPresentPageFromSkip(skip: number, rerenderpage: boolean) {
      if(isNaN(skip)){
          return;
      }
      this.presentPage = (((skip *1) / this.pagesize) + 1);
      if (rerenderpage)
          return this.navigateBasedOnLatestState();
  }

  //This is the page size of the list desplay in the table/list view
  getPageSize(){
    return this.pagesize;
  }
  setPageSize(size: number, rerenderpage: boolean){
    if(isNaN(size)){
      return;
    }
    this.pagesize = size * 1;
    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  //<editor-fold desc="Get Filters">
  getOrderbyField(){
    return this.orderByField;
  }
  getIsAcending(){
    return this.isAcending;
  }
  getFilterFieldName(position: number){
    var value;
    switch(position){
      case 0:
        value = this.filterFieldName;
        break;
      case 1:
        value = this.filterFieldName1;
        break;
      case 2:
        value = this.filterFieldName2;
        break;
    }
    return value;
  }
  getFilterValue(position: number){
    var value;
    switch(position){
      case 0:
        value = this.filterValue;
        break;
      case 1:
        value = this.filterValue1;
        break;
      case 2:
        value = this.filterValue2;
        break;
    }
    return value;
  }
  getFilterOperator(position: number){
    var value;
    switch(position){
      case 0:
        value = this.filterOperator;
        break;
      case 1:
        value = this.filterOperator1;
        break;
      case 2:
        value = this.filterOperator2;
        break;
    }
    return value;
  }
  getFragment(){
    return this.fragment;
  }
  //</editor-fold>


  //<editor-fold desc="Set Filters">
  setOrderbyField(value: string, rerenderpage: boolean){
    if(!(value && typeof value === 'string')){
      return;
    }
    this.orderByField = value;
    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setIsAcending(value: boolean, rerenderpage: boolean){
    if(!(typeof value === 'boolean')){
      return;
    }
    this.isAcending = value;
    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setFilterFieldName(value: string, position: number, rerenderpage: boolean){
    if(!(value && typeof value === 'string')){
      return;
    }
    if(isNaN(position)){
      return;
    }

    switch(position){
      case 0:
        this.filterFieldName = value;
        break;
      case 1:
        this.filterFieldName1 = value;
        break;
      case 2:
        this.filterFieldName2 = value;
        break;
    }

    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setFilterValue(value : any, position: number, rerenderpage: boolean){
    if(!(value && typeof value === 'string')){
      return;
    }
    if(isNaN(position)){
      return;
    }

    switch(position){
      case 0:
        this.filterValue = value;
        break;
      case 1:
        this.filterValue1 = value;
        break;
      case 2:
        this.filterValue2 = value;
        break;
    }

    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setFilterOperator(value : any, position: number, rerenderpage: boolean){
    if(!(value && typeof value === 'string')){
      return;
    }
    if(isNaN(position)){
      return;
    }

    switch(position){
      case 0:
        this.filterOperator = value;
        break;
      case 1:
        this.filterOperator1 = value;
        break;
      case 2:
        this.filterOperator2 = value;
        break;
    }

    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }

  setFragment(value: string, rerenderpage: boolean){
    if(!(value && typeof value === 'string')){
      return;
    }
    this.fragment = value;
    if(rerenderpage)
      return this.navigateBasedOnLatestState();
  }
  //</editor-fold>

  private generateQueryStringFromPresentState(){
     var url =  this.modelUrl +'?' + this.constants.skip + '=' + this.getPageSkip() + '&' +this.constants.take+ '=' + this.getPageTake();

     //if there is ordering state data please add it to the
     if(this.orderByField){
       url = url + '&' + this.constants.orderbyField + '=' + this.orderByField;
       url = url + '&' + this.constants.isAscending + '=' + this.isAcending;
     }

    if(this.filterFieldName && this.filterValue && this.filterOperator) {
      url = url+ '&' + this.constants.name + '=' + this.filterFieldName + '&' + this.constants.value + '=' + this.filterValue + '&' + this.constants.operator + '=' + this.filterOperator;
    }
    if(this.filterFieldName1 && this.filterValue1 && this.filterOperator1) {
      url = url+ '&' + this.constants.name1 + '=' + this.filterFieldName1 + '&' + this.constants.value1 + '=' + this.filterValue1 + '&' + this.constants.operator1 + '=' + this.filterOperator1;
    }
    if(this.filterFieldName2 && this.filterValue2 && this.filterOperator2) {
      url = url+ '&' + this.constants.name2 + '=' + this.filterFieldName2 + '&' + this.constants.value2 + '=' + this.filterValue2 + '&' + this.constants.operator2 + '=' + this.filterOperator2;
    }

    return url;
  }

  navigateBasedOnLatestState() {
    var paramsObject = {};//
    paramsObject[this.constants.skip] = this.getPageSkip();
    paramsObject[this.constants.take] = this.getPageTake();
    if(this.orderByField){
    paramsObject[this.constants.orderbyField] = this.orderByField;
    paramsObject[this.constants.isAscending] = this.isAcending;
    }
    if(this.filterFieldName)
    paramsObject[this.constants.name] = this.filterFieldName;
    if(this.filterValue)
    paramsObject[this.constants.value] = this.filterValue;
    if(this.filterOperator)
    paramsObject[this.constants.operator] = this.filterOperator;
    if(this.filterFieldName1)
    paramsObject[this.constants.name1] = this.filterFieldName1;
    if(this.filterValue1)
    paramsObject[this.constants.value1] = this.filterValue1;
    if(this.filterOperator1)
    paramsObject[this.constants.operator1] = this.filterOperator1;
    if(this.filterFieldName2)
    paramsObject[this.constants.name2] = this.filterFieldName2;
    if(this.filterValue2)
    paramsObject[this.constants.value2] = this.filterValue2;
    if(this.filterOperator2)
    paramsObject[this.constants.operator2] = this.filterOperator2;

    this.router.navigate([this.modelComponentRoute, paramsObject]);
  }

  setPresentModel(modelUrl: string, modelName: string, componentRoute: string){
    this.modelUrl = modelUrl;
    this.modelName = modelName;
    this.modelComponentRoute = componentRoute;
  }

  resetState() {
       this.presentPage = 1;
       this.dataList = null;

       this.modelUrl = "";
       this.modelName = "";

       //the display data item status and id
       this.selecteditem = null;
       this.isSearching = false;

       this.fragment = null;
       this.orderByField = null;
       this.isAcending = null;

       this.filterFieldName = null;
       this.filterFieldName1 = null;
       this.filterFieldName2 = null;

       this.filterValue = null;
       this.filterValue1 = null;
       this.filterValue2 = null;

       this.filterOperator = null;
       this.filterOperator1 = null;
       this.filterOperator2 = null;
  }
}
