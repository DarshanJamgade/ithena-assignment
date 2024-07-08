import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent {
  public doughnutCharLegend = false;
  public doughnutChartLabels: string[] = ['Referal', 'Direct', 'Organic Search'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [10, 20, 70], backgroundColor: ['#fec747', '#7099d1', '#75b265'],   },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,

  };
}
