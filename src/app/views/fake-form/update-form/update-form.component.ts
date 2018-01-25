import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {DataItemStateService} from "../../../services/data-item-state.service";
import {Observable} from "rxjs/Rx";
import {UnsavedChangesInComponentDeActivate} from "../../../services/unsaved-guard.service";

@Component({
  selector: 'fw-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit, UnsavedChangesInComponentDeActivate {

  viewData : any;
  id: string;
  dataLoaded : boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
    private state: DataItemStateService) { }

  ngOnInit() {
    this.state.resetState();
    //Todo: show spinner until data arrives
    //modelUrl: string, modelName: string
    this.state.setPresentModel('/model','Update Fake Form');

    this.id = this.route.snapshot.params['id'];

    if(this.id){
      //Todo: dataloaded
      this.state.setPageUniqueId(this.id);
      this.state.loadItemById(this.dataLoaded);
      this.viewData = this.state.getDataItem();
    }
  }

  afterUpdate(){
    this.router.navigate(['crud'])
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    //If not allow to edit then allow the person to leave without saving
    //if(!this.allowEdit){
    //  return true;
    //}
    //Todo: check if form is dirty, if so then send false else true
    //if(dirty){
    // return confirm('Do you want to discard your changes');
    // }else{
    // return true}
    return true;
  }
}
