import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TaskFilterComponent,
    TaskFormComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tasklist-frontend';
}
