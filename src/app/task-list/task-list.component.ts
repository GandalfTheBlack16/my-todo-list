import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  cardTitle = 'To Dos'
  taskList: Task[] = [
    { id: 1, title: "Esto es una tarea de prueba 1", checked: false },
    { id: 2, title: "Esto es una tarea de prueba 2", checked: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  checkTask(taskId: number) {
    const task = this.taskList.find(i => i.id === taskId);
    if (task) {
      task.checked = !task.checked;
    }
  }
}
