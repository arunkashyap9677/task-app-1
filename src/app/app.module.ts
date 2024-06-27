import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { AgGridModule } from 'ag-grid-angular';
import {
  OptionsCellRendererComponent,
  OptionsDialog,
} from './sharedComponents/options-cell-renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OptionsCellRendererComponent, OptionsDialog],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [TaskService],
})
export class AppModule {}
