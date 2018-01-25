import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'fw-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() data : {value:string, class: string, format: string
  ,valueFunc: any, item: any, clickFunction: any};
  constructor() {}

  ngOnInit() {
    if(!this.data.class){
      this.data.class='';
    }
  }

  //Todo: check if is texbox, textarea or neither of the two so as to draw
  //Todo: or not to draw the boundaries

  valueFunc(){
    if(!this.data.valueFunc){
      return;
    }else{
      return this.data.valueFunc(this.data.valueFunc, this.data.item);
    }
  }

  clickFunction(){
    if(!this.data.clickFunction){
      return;
    }else{
      return this.data.clickFunction(this.data.item);
    }
  }
  //Todo: Please write custom filter to handle all string format as filter words like 'uppercase'
  //Todo: do not allow support for string binding
}
