import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataItemStateService} from "../../../../services/data-item-state.service";
import {FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {UnsavedChangesInComponentDeActivate} from "../../../../services/unsaved-guard.service";

@Component({
  selector: 'fw-create-form',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.scss']
})
export class LocationCreateComponent implements OnInit, UnsavedChangesInComponentDeActivate {

  spec; formData;

  constructor(private router: Router, private state: DataItemStateService) { }

  ngOnInit() {
    //Reset the data-item store state
    this.state.resetState();

    //Set some default value ie. modelUrl: string, modelName: string
    this.state.setPresentModel('/locations','Create Location');

    this.spec = {
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

    this.formData = {
      state: 1,
      area: 1,
      subarea: 1,
      name: "Bolahan Street"
    };
  }

  onSubmit(){
    //Todo: call submit on the parent view if the model is vald
    //console.log(this.createForm)
  }

  afterCreate(){
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
