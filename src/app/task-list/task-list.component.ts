import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskFilterComponent } from '../task-filter/task-filter.component';
import { Task } from '../models/task';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions } from 'ag-grid-community';
import { OptionsCellRendererComponent } from '../sharedComponents/options-cell-renderer.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [
    TaskFormComponent,
    TaskFilterComponent,
    CommonModule,
    AgGridAngular,
  ],
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  isModalVisible: boolean = false;
  isBrowser: boolean = false;
  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  private gridApi!: GridApi;
  private gridOptions: GridOptions = {};

  ngOnInit() {
    this.isBrowser = typeof window !== 'undefined';
    if (this.isBrowser) {
      this.columnDefs = [
        { headerName: 'Date', field: 'date' },
        { headerName: 'Entity Name', field: 'entityName' },
        { headerName: 'Task Type', field: 'taskType', filter: true },
        { headerName: 'Time', field: 'formattedTime' },
        { headerName: 'Contact Person', field: 'contactPerson' },
        { headerName: 'Notes', field: 'notes' },
        { headerName: 'Status', field: 'status' },
        { headerName: 'Options', cellRenderer: OptionsCellRendererComponent },
      ];
      this.rowData = [];
    }
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed(event: Task) {
    this.isModalVisible = false;
    console.log('logging emitted event ', event);
    if (event) {
      this.gridApi.applyTransaction({ add: [event] });
      //this.tasks.push(event);
      console.log('logging row data', this.rowData);
    }
  }
}
