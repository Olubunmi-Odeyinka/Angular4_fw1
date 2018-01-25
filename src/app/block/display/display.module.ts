import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { IconComponent } from './icon/icon.component';
import { DateComponent } from './date/date.component';
import { VideoComponent } from './video/video.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, TextComponent, IconComponent, DateComponent, VideoComponent, NumberComponent
  ],
  declarations: [TextComponent, IconComponent, DateComponent, VideoComponent, NumberComponent]
})
export class DisplayModule { }
