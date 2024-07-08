import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a', backgroundColor: ['#fec747', '#fec747', '#fec747'] },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a', backgroundColor: ['#7099d1', '#7099d1', '#7099d1'] },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a', backgroundColor: ['#75b265', '#75b265', '#75b265'] }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

}
