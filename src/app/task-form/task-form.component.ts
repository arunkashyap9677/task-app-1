import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  input,
} from '@angular/core';
import { TaskService } from '../task.service';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Task } from '../models/task';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TaskFormComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('logging in ngOnInit of task form', this.isVisible);
    setTimeout(() => {
      this.timeForm?.reset();
    });
  }

  @ViewChild('taskForm') timeForm: NgForm | undefined;

  @Input() isVisible: boolean = false;
  @Output() closed = new EventEmitter();

  hours: number[] = Array.from({ length: 12 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  isAM: boolean = true;

  closeModal() {
    this.isVisible = false;
    this.closed.emit();
  }

  task: Task = {
    date: '',
    entityName: '',
    taskType: '',
    time: {
      hour: 0,
      minute: 0,
      isAM: false,
    },
    phone: 0,
    contactPerson: '',
    notes: '',
    status: 'open',
  };

  createTask() {
    this.taskService.createTask(this.task).subscribe((newTask) => {
      console.log('Task created:', newTask);
    });
  }

  onSubmit(form: any) {
    console.log('task name', this.task.entityName);
    console.log('task date', this.task.date);
    console.log('AM/PM', this.isAM);
    this.closed.emit(this.task);
  }

  onCancel() {
    this.isVisible = false;
    this.closed.emit();
  }
}
