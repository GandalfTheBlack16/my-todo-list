import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaskListsApiService } from '../../service/task-lists/task-lists-api.service';
import { Task, TaskList } from 'src/app/model/task.model';
import { Observable } from 'rxjs';
import { TaskApi, TaskListApi } from 'src/app/model/api/task-list-api.model';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private apiService: TaskListsApiService) { }

  getTaskLists(): Observable<TaskList[]> {
    return this.apiService.getTaskLists()
      .pipe(
        map(taskListApis => taskListApis.map(response => ({
          id: response.id,
          title: response.name,
          tasks: response.tasks.map(task => ({
            id: task.id,
            title: task.title,
            checked: task.completed,
            categories: []
          }))
        })))
      );
  }
  
  updateTaskList(taskList: TaskList): Observable<void> {
    const {id, title, tasks} = taskList;
    const taskListApi: TaskListApi = {
      id,
      name: title,
      tasks: tasks.map(task => ({
        id: task.id,
        title: task.title,
        completed: task.checked,
        createdAt: '',
        updatedAt: new Date().toISOString()
      })),
      createdAt: '',
      updatedAt: new Date().toISOString()
    }
    return this.apiService.updateTaskLists(taskListApi);
  }

  updateTask(taskListId: number, task: Task): Observable<void> {
    const taskApi: TaskApi = {
      id: task.id,
      title: task.title,
      completed: task.checked,
      createdAt: '',
      updatedAt: new Date().toISOString()
    };
    return this.apiService.updateTask(taskListId, taskApi);
  }
}
