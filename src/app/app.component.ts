import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  tasks: string[];
  editModeArr: boolean[] = [];
  i: number;
  task: string;

  constructor() {
    this.tasks = ['Learn Angular 2', 'Get a job'];

    for(let i = 0; i < Array.length; i++) {
      this.editModeArr[i] = false;
    }
  }

  addTask() {
    if (!this.task) { return; }
    this.tasks.push(this.task);
    this.task = '';
  }

  onTaskDeleted(task: string){
    var idx = this.tasks.findIndex((elt) => (elt === task));
    if (idx != -1) {
      this.tasks.splice(idx, 1);
    }
  }
}
