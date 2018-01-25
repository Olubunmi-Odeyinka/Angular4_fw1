import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'fw-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() data : {value: {}, formGroup: FormGroup, spec: {}, saveFunction: any, backToList : any};

  constructor() { }

  ngOnInit() {
    if(!this.data){
      //Todo: throw error
    }

    if(!this.data.formGroup){
      //Todo: throw error
    }
  }
}
