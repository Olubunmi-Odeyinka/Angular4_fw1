import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'fw-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() data : {value: {}, formGroup: FormGroup, spec: {}, saveFunction: any, backToList : any, cancelFunction : any};

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
