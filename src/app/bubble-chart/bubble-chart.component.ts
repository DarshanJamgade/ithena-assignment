import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, Legend } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.css'
})
export class BubbleChartComponent {

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },

    },
    scales: {
      x: {
        min: 0,
        max: 30,
      },
      y: {
        min: 0,
        max: 30,
      }
    },

  };
  public bubbleChartLegend = true;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 }
      ],
      label: 'United Kingdom',
      backgroundColor: '#fec747'
    },
    {
      data: [
        { x: 12, y: 14, r: 10 },
        { x: 18, y: 10, r: 15 },
        { x: 28, y: 14, r: 20 }
      ],
      label: 'Canada',
      backgroundColor: '#42a5f5'
    },
    {
      data: [
        { x: 14, y: 8, r: 8 },
        { x: 19, y: 15, r: 10 },
        { x: 30, y: 20, r: 25 }
      ],
      label: 'Australia',
      backgroundColor: '#ffca28'
    },
  ];
}
