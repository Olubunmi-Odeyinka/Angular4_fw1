import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'fw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() data :{value: any,  spec: any};
  theFormGroup: FormGroup;
  specKeys;
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  };

  constructor() {}


  ngOnInit() {
    //Todo: for a dynamic form the value and spec field of data might be changing so
    //Todo: we might choose to make these variable specKeys and valueKeys into an
    //Todo: observable here so that they can track changes from the controller
    //Todo: Initiator

    if(this.data.spec){
      this.specKeys = Object.keys(this.data.spec);
      //this.valueKeys = Object.keys(this.data.value);
    }

    if(this.data.spec && this.specKeys && this.data.value){
      this.theFormGroup = new FormGroup(this.creatFormGroupFromSpec(this.data));
      this.theFormGroup.patchValue(this.data.value);
    }else{
      throw new Error('The Form Parameter are not valid');
    }
  }

  creatFormGroupFromSpec(data){
    var formGroup = {};
    this.specKeys.forEach(function(key)
    {
      formGroup[key] =  new FormControl(data.spec[key].default || null, data.spec[key].validation || null, data.spec[key].asycValidation || null);
    });
    return formGroup;
  }

  onSubmit(){
    console.log(this.theFormGroup)
  }
}
