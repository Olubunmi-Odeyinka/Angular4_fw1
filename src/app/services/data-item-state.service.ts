import { Injectable } from '@angular/core';
import {DataAccessService} from "./data-access.service";
import {Response} from "@angular/http";

@Injectable()
export class DataItemStateService {

  //server url
  modelUrl: string = "";
  modelName: string ="";

  private itemId : any = null;
  private itemData: any = null;
  private changesSaved: boolean = false;

  constructor(private dataAccess :DataAccessService) { }

  loadData(){
    //Todo: return page total
  }

  lookup(lookupurl: string, dataLoaded: boolean){
    this.dataAccess.loadItemById(lookupurl)
      .subscribe((response: Response) => {
        var theData = response.json();
          dataLoaded = true;
      },
      (error) => {
        dataLoaded = true;
      });
  }

  getDataItem(){
    return this.itemData;
  }

  setPageUniqueId(page: string){
    if(!(page && typeof page === 'string')){
      return;
    }
    this.itemId = page;
  }

  getPageUniqueId(){
   return this.itemId;
  }

  loadItemById(dataLoaded : boolean){
    this.dataAccess.loadItemById(this.modelUrl+'/'+this.itemId)
      .subscribe((response :Response) => {
          var theData = response.json();
          this.itemData = theData.data;
          dataLoaded = true;
        },
        (error)=>{
          dataLoaded = true;
        });
  }

  addNewItem(dataLoaded : boolean){
      this.dataAccess.postItemtoServer(this.modelUrl, this.itemData)
        .subscribe((response :Response) => {
            var theData = response.json();
            this.itemData = theData.data;
            dataLoaded = true;
          },
          (error)=>{
            dataLoaded = true;
          });
  }

  deleteItem(dataLoaded : boolean){
    this.dataAccess.deleteItemOnServer(this.modelUrl+'/'+this.itemId)
      .subscribe((response :Response) => {
          var theData = response.json();
          this.itemData = theData.data;
          dataLoaded = true;
        },
        (error)=>{
          dataLoaded = true;
        });
  }

  modifyItem(dataLoaded : boolean){
    this.dataAccess.patchItemOnServer(this.modelUrl+'/'+this.itemId, this.itemData)
      .subscribe((response :Response) => {
          var theData = response.json();
          this.itemData = theData.data;
          dataLoaded = true;
        },
        (error)=>{
          dataLoaded = true;
        });
  }

  private setItemState(item, state){
    //Can me Modified, Deleted, Created or Unchanged
  }

  setPresentModel(modelUrl: string, modelName: string){
    this.modelUrl = modelUrl;
    this.modelName = modelName;
  }

  resetState() {
    this.modelUrl = "";
    this.modelName = "";
    this.itemId = null;
    this.itemData = null;
    this.changesSaved = false;
  }
}
