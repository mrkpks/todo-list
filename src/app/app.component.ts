import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'todo-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  tasks: Task[];
  task: Task = {id: 2, name: ''};

  constructor() {
    this.tasks = [
      {id: 0, name: 'Learn Angular 2'},
      {id: 1, name: 'Get a job'}
    ];
  }

  onAddTask() {
    if (this.task.name === '') { return; }
    this.tasks.push(this.task);
    this.task = {id: this.task.id + 1, name: ''};
  }

  onTaskDeleted(id: number){
    this.tasks = this.tasks.filter(item => item.id != id);
  }
}
