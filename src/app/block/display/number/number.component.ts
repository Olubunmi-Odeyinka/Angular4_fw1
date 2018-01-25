import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input() data : {value:string, currency: string, class: string, format: string, clickFunction: any, item: any};
  constructor() { }

  //Todo: check if is texbox, textarea or neither of the two so as to draw
  //Todo: or not to draw the boundaries
  ngOnInit() {
    if(!this.data.class){
      this.data.class='';
    }
  }

  clickFunction(){
    if(!this.data.clickFunction){
      return;
    }else{
      return this.data.clickFunction(this.data.item);
    }
  }
}
//Currency => {{ 234.25262 | currency : 'GBP' : true : '1.2-2'}}
//number => {{ 2525.2526 | number : '1.2-2'}}
//data.format => {minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
