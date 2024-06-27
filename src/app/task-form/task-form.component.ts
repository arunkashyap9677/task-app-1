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
    setTimeout(() => {
      this.timeForm?.reset();
    });
  }

  @ViewChild('taskForm') timeForm: NgForm | undefined;

  @Output() closed = new EventEmitter();

  hours: number[] = Array.from({ length: 12 }, (_, i) => i);
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i);
  isAM: boolean = true;

  closeModal() {
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
    formattedTime: '',
  };

  onSubmit(form: any) {
    console.log('task name', this.task.entityName);
    console.log('task date', this.task.date);
    console.log('AM/PM', this.isAM);
    this.formatTime();
    this.closed.emit(this.task);
  }

  onCancel() {
    this.closed.emit();
  }

  formatTime() {
    var hour = '';
    var minute = '';

    if (this.task.time.hour < 10) {
      hour = '0' + this.task.time.hour.toString();
    } else {
      hour = this.task.time.hour.toString();
    }
    if (this.task.time.minute < 10) {
      minute = '0' + this.task.time.minute.toString();
    } else {
      minute = this.task.time.minute.toString();
    }

    this.task.formattedTime =
      hour + ':' + minute + ' ' + (this.task.time.isAM ? 'AM' : 'PM');
  }
}
