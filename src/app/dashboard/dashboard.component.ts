import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from '../bubble-chart/bubble-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DoughnutChartComponent, BubbleChartComponent, BarChartComponent, MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
