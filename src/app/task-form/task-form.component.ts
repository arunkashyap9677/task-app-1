import { Component, Input, OnInit, Output, input } from '@angular/core';
import { TaskService } from '../task.service';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class TaskFormComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('logging in ngOnInit of task form', this.isVisible);
  }

  @Input() isVisible: boolean = false;
  @Output() closed = new EventEmitter();

  closeModal() {
    this.isVisible = false;
    this.closed.emit();
  }

  task = {
    date: '',
    entityName: '',
    taskType: '',
    time: '',
    contactPerson: '',
    note: '',
  };

  createTask() {
    this.taskService.createTask(this.task).subscribe((newTask) => {
      console.log('Task created:', newTask);
    });
  }
}


