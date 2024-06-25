import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [TaskFormComponent, TaskFilterComponent, CommonModule],
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
  }
  tasks: Task[] = [];
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed(event: Task) {
    this.isModalVisible = false;
    console.log('logging emitted event ', event);
    if (event) {
      this.tasks.push(event);
      console.log('logging tasks', this.tasks);
    }
  }
}
