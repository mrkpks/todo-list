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
  i: number; // FIXME: Remove unused properties.
  task: string;

  constructor() {
    this.tasks = ['Learn Angular 2', 'Get a job'];

    for(let i = 0; i < Array.length; i++) {
      this.editModeArr[i] = false;
    }
    // FIXME: What is the purpose of editModeArr?
  }

  addTask() {
    if (!this.task) { return; }
    this.tasks.push(this.task);
    this.task = '';
  }

  onTaskDeleted(task: string){
    var idx = this.tasks.findIndex((elt) => (elt === task));
    // FIXME: Do not use ES5's var declarations. Use const (by default) or let (if you need the variable to be writable).
    // FIXME: What if I create 2 tasks with the same text and want to delete the one with a higher index? Try using something else as a unique identifier.
    if (idx != -1) {
      this.tasks.splice(idx, 1);
    }
  }
}
