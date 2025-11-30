import { Component, OnInit } from '@angular/core';
import { Task, TaskList } from '../../model/task.model';
import { TaskListService } from './task-list.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EditAction, TextStyleType } from 'src/app/shared/editable-text/editable-text.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskLists: TaskList[] = [];

  buttonEditAction = EditAction.BUTTON;
  checkedStyle: TextStyleType = {
    'text-decoration': 'line-through'
  };

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
    if (!$event.source) {
      return;
    }
    const taskId = $event.source.id;
    this.taskLists.forEach(list => {
      const task = list.tasks.find(t => t.id.toString() === taskId);
      if (task) {
        task.checked = $event.checked;
        this.taskListService.updateTask(list.id, task).subscribe();
      }
    });
  }

  changeTaskTitle(listId: number, taskId: number, newTitle: string) {
    this.taskLists.forEach(list => {
      if (list.id === listId) {
        const task = list.tasks.find(t => t.id === taskId);
        if (task) {
          task.title = newTitle;
          this.taskListService.updateTask(list.id, task).subscribe();
        }
      }
    });
  }

  addTask(listId: number) {
    const lastTaskId = Math.max(0, ...this.taskLists.flatMap(list => list.tasks.map(t => t.id)));
    const taskList = this.taskLists.find(i => i.id === listId);
    if (taskList) {
      const newTask: Task = {
        id: lastTaskId + 1,
        title: 'New Task',
        checked: false
      };
      taskList.tasks.push(newTask);
      this.taskListService.updateTask(taskList.id, newTask).subscribe();
    }
  }

}
