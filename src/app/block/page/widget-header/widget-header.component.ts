import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: '[fw-widget-header]',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.scss']
})
export class WidgetHeaderComponent implements OnInit {

  @Input() data : {title: string, subtitle: string, class: string};
  constructor(private renderer: Renderer2, private elRef : ElementRef) { }

  ngOnInit() {
    this.renderer.setAttribute(this.elRef.nativeElement, 'class', 'container-fluid widget-head col-md-12');
  }

}
