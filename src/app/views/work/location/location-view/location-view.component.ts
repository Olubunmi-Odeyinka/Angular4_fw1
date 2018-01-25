import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataItemStateService} from "../../../../services/data-item-state.service";
import {Validators} from "@angular/forms";
import {UnsavedChangesInComponentDeActivate} from "../../../../services/unsaved-guard.service";

@Component({
  selector: 'fw-view-form',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {

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
        control: 'textbox'
      },
      state: {
        label: 'State',
        control: 'dropdown',
        textValue: this.getStateString
      },
      area: {
        label: 'Area',
        control: 'dropdown',
        textValue: this.getAreaString
      },
      subarea: {
        label: 'Sub Area',
        control: 'dropdown',
        textValue: this.getSubAreaString
      },
      name: {
        label: 'Full Adress',
        control: 'textbox'
      }
    };
  }

  getStateString(id){
    return "Lagos";
  }

  getAreaString(id){
    return "Ipaja";
  }

  getSubAreaString(id){
    return "Ipaja";
  }
}
