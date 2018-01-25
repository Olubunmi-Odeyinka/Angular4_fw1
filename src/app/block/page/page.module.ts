import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ToastComponent } from './toast/toast.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, MenuComponent, FooterComponent, ProgressBarComponent, ToastComponent, WidgetHeaderComponent
  ],
  declarations: [MenuComponent, FooterComponent, ProgressBarComponent, ToastComponent, WidgetHeaderComponent]
})
export class PageModule { }
