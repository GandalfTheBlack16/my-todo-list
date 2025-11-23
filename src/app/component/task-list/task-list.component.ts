import { Component, OnInit } from '@angular/core';
import { Task, TaskList } from '../../model/task.model';
import { TaskListService } from './task-list.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskLists: TaskList[] = [];

  constructor(private taskListService: TaskListService) {}

  ngOnInit(): void {
    this.taskListService.getTaskLists().subscribe(data => {
      this.taskLists = data;
    });
  }

  onChangeTitle(listId: number, newTitle: string) {
    const taskList = this.taskLists.find(i => i.id === listId);
    if (taskList) {
      taskList.title = newTitle;
      this.taskListService.updateTaskList(taskList).subscribe();
    }
  }

  checkTask($event: MatCheckboxChange) {
    const taskId = $event.source.id;
    this.taskLists.forEach(list => {
      const task = list.tasks.find(t => t.id.toString() === taskId);
      if (task) {
        task.checked = $event.checked;
        this.taskListService.updateTask(list.id, task).subscribe();
      }
    });
  }
}
