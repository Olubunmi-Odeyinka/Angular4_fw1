import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DonutPieComponent } from './donut-pie/donut-pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PieChartComponent, ProgressBarComponent, BarChartComponent, DonutPieComponent]
})
export class StatisticModule { }
