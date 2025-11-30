import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskApi, TaskListApi } from 'src/app/model/api/task-list-api.model';
import { APP_CONFIG } from 'src/app/shared/app.config';

@Injectable({
  providedIn: 'root'
})
export class TaskListsApiService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = inject(APP_CONFIG).apiBaseUrl;
  }

  getTaskLists(): Observable<TaskListApi[]> {
    return this.httpClient.get<TaskListApi[]>(`${this.baseUrl}/task-lists`);
  }

  updateTaskLists(taskList: TaskListApi): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/task-lists/${taskList.id}`, taskList);
  }

  updateTask(taskListId: number, task: TaskApi): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/task-lists/${taskListId}/tasks`, task);
  }
}
