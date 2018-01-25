import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() data : {value: {}, spec: {}, backToList : any};

  constructor() { }

  ngOnInit() {
    if(!this.data){
      //Todo: throw error
    }
  }
}
