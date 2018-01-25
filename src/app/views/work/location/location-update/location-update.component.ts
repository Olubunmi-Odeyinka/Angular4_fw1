import { Component, OnInit } from '@angular/core';
import {UnsavedChangesInComponentDeActivate} from "../../../../services/unsaved-guard.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {DataItemStateService} from "../../../../services/data-item-state.service";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'fw-update-form',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.scss']
})
export class LocationUpdateComponent implements OnInit, UnsavedChangesInComponentDeActivate {

  spec; formData;
  id: string;
  dataLoaded : boolean = false;
  constructor(private router: Router, private route: ActivatedRoute,
              private state: DataItemStateService) { }

  ngOnInit() {
    this.state.resetState();
    //Todo: show spinner until data arrives
    //modelUrl: string, modelName: string
    this.state.setPresentModel('/locations','Update Location');

    this.id = this.route.snapshot.params['id'];

    if(this.id){
      //Todo: dataloaded
      this.state.setPageUniqueId(this.id);
      this.state.loadItemById(this.dataLoaded);
      this.formData  = this.state.getDataItem();
    }

    this.spec = {
        _id: {
        label: 'ID',
        control: 'textbox',
        isReadOnly: true,
        validation: [Validators.required]
      },
      state: {
        label: 'State',
        control: 'dropdown',
        validation: [Validators.required],
        default: 1,
        optionList: [{key: 1, name: 'Level 1'},{key: 2, name: 'Level 2'}]
      },
      area: {
        label: 'Area',
        control: 'dropdown',
        validation: [Validators.required],
        default: 1,
        optionList: [{key: 1, name: 'Level 1'},{key: 2, name: 'Level 2'}]
      },
      subarea: {
        label: 'Sub Area',
        control: 'dropdown',
        validation: [Validators.required],
        default: 1,
        optionList: [{key: 1, name: 'Level 1'},{key: 2, name: 'Level 2'}]
      },
      name: {
        label: 'Full Adress',
        control: 'textbox',
        default: null,
        validation: [Validators.required]
      }
    };
  }

  afterUpdate(){
    this.router.navigate(['crud'])
  }

  onSubmit(){
    //Todo: call submit on the parent view if the model is valid
    //console.log(this.createForm)
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
