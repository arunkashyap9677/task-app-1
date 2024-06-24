import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [TaskService],
})
export class AppModule {}
