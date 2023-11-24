import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut-graphic',
  template: `
    <h3>{{ chartTitle }}</h3>
    <canvas baseChart class="chart" [data]="doughnutChartData" type="doughnut">
    </canvas>
  `,
})
export class DonutGraphicComponent {
  @Input('title') chartTitle: string = 'No title set';
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  @Input('data') doughnutChartDataSet: number[] = [10, 20, 30];

  // Doughnut
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.doughnutChartDataSet }],
  };
}
