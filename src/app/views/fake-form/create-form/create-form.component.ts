import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UnsavedChangesInComponentDeActivate} from "../../../services/unsaved-guard.service";
import {Observable} from "rxjs/Rx";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {DataItemStateService} from "../../../services/data-item-state.service";


@Component({
  selector: 'fw-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit, UnsavedChangesInComponentDeActivate {

  spec; formData;

  constructor(private router: Router, private state: DataItemStateService) { }

  ngOnInit() {
    //Reset the data-item store state
    this.state.resetState();

    //Set some default value ie. modelUrl: string, modelName: string
    this.state.setPresentModel('/model','Create Fake Form');

    //this.createForm =
    //  new FormGroup({
    //    //'field': new FormControl(default, [validators])
    //    'username': new FormControl(null,[Validators.required]),
    //    'email': new FormControl(null, [Validators.email, Validators.required]),
    //    'sex': new FormControl(1),
    //    'level': new FormControl(2)
    //});

    this.spec = {
      username: {
        label: 'Full Name',
        control: 'textbox',
        default: null,
        validation: [Validators.required]
      },
      email: {
        label: 'Course Subject',
        control: 'textbox',
        validation: [Validators.required, Validators.email]
      },
      sex: {
        label: 'Sex',
        control: 'radio',
        validation: [Validators.required],
        default: 1,
        optionList: [{key: 1, name: 'Male'},{key: 2, name: 'Female'}]
      },
      level: {
        label: 'Class',
        control: 'dropdown',
        validation: [Validators.required],
        default: 1,
        optionList: [{key: 1, name: 'Level 1'},{key: 2, name: 'Level 2'}]
      },
      isSingle: {
        label: 'Single',
        control: 'checkbox',
        validation: [Validators.required],
        default: false
      },
      age: {
        label:'Current Age',
        control:'datepicker',
        validation:[Validators.required],
        default: {
          date: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()}
        }
      }
    };

    this.formData = {
      username: 'Odeyinka Olubunmi',
      email: 'odeyinkao@yahoo.com',
      sex: 1,
      level: 2
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
