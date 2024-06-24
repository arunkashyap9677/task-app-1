import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskFilterComponent } from "../task-filter/task-filter.component";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    standalone: true,
    imports: [TaskFormComponent, TaskFilterComponent]
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
    });
    console.log('logging ngOnInit TaskListComponent', this.isModalVisible);
  }

  tasks: any[] = [];
  isModalVisible: boolean = false;

  openModal() {
    console.log('logging isVisible on open', this.isModalVisible);
    this.isModalVisible = true;
    console.log('logging isVisible on open', this.isModalVisible);
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }
}
