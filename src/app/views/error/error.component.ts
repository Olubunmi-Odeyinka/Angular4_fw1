import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fw-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMessage: string;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['message'])
    this.errorMessage = this.route.snapshot.data['message'];
  }

}
