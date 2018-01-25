import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
  export class TableCellComponent implements OnInit {
  @Input() value: any;
  @Input() specs: any;

  constructor() { }

  ngOnInit() {
    var x = this.value;
    var y = this.specs;
  }

}
