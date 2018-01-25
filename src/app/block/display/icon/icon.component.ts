import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fw-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() data : {imgUrl:string, imgAlt:string, imgHeight:number, imgWidth: number, imgClass:string,  iconClass: string,
    imgUrlFunc : any, imgAltFunc: any, iconClassFunc:any, item: any, clickFunction: any};
  constructor() {}

  ngOnInit() {
    if(this.data.imgUrl){
       if(!this.data.imgHeight){
        this.data.imgHeight = 40;
      }
      if(!this.data.imgWidth){
        this.data.imgWidth = 40;
      }
      if(!this.data.imgAlt){
        this.data.imgAlt = '';
      }
      if(!this.data.imgClass){
        this.data.imgClass='';
      }
    }
  }

  imgUrlFunc(){
   if(!this.data.imgUrlFunc){
     return;
   }else{
     return this.data.imgUrlFunc(this.data.imgUrl, this.data.item);
   }
  }

  imgAltFunc(){
    if(!this.data.imgAltFunc){
      return;
    }else{
      return this.data.imgAltFunc(this.data.imgAlt, this.data.item);
    }
  }

  iconClassFunc(){
    if(!this.data.iconClassFunc){
      return;
    }else{
      return this.data.iconClassFunc(this.data.iconClass, this.data.item);
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
