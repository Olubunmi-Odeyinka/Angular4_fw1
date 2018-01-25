import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() data : {value:string, class: string, format: string, clickFunction: any, item: any};
  constructor() { }

  //Todo: check if is texbox, textarea or neither of the two so as to draw
  //Todo: or not to draw the boundaries

  ngOnInit() {
    if(!this.data.class){
      this.data.class='';
    }
    if(!this.data.format){
      this.data.format='mediumDate';
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

 //'medium': equivalent to 'yMMMdjms' (e.g. Sep 3, 2010, 12:05:08 PM for en-US)
 //'short': equivalent to 'yMdjm' (e.g. 9/3/2010, 12:05 PM for en-US)
 //'fullDate': equivalent to 'yMMMMEEEEd' (e.g. Friday, September 3, 2010 for en-US)
 //'longDate': equivalent to 'yMMMMd' (e.g. September 3, 2010 for en-US)
 //'mediumDate': equivalent to 'yMMMd' (e.g. Sep 3, 2010 for en-US)
 //'shortDate': equivalent to 'yMd' (e.g. 9/3/2010 for en-US)
 //'mediumTime': equivalent to 'jms' (e.g. 12:05:08 PM for en-US)
 //'shortTime': equivalent to 'jm' (e.g. 12:05 PM for en-US)
