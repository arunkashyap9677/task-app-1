import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  updateTask(taskId: any, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${taskId}`, task);
  }

  changeStatus(taskId: any, status: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${taskId}/status`, { status });
  }

  deleteTask(taskId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
}
