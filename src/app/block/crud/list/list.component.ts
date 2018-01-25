import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data : any[];

  constructor() { }

  ngOnInit() {
    if(!this.data){
      //Todo: throw error
    }
  }
}
