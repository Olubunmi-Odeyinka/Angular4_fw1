import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() data : {value: {}, deleteFunction: any, spec: {},  backToList : any};

  constructor() { }

  ngOnInit() {
    if(!this.data){
      //Todo: throw error
    }
  }
}
