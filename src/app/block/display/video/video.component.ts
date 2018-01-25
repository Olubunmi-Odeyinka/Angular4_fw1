import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fw-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() data : {};
  constructor() { }

  ngOnInit() {
  }

}
