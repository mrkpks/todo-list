import { Component } from '@angular/core';

// export class Task {
//   description: string;
// }

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  tasks: string[];
  editMode: boolean[] = new Array();
  i: number;

  constructor() {
    this.tasks = ['Learn Angular 2', 'Get a job'];

    for(let i = 0; i < Array.length; i++) {
      this.editMode[i] = false;
    }
  }

  addTask(task: string) {
    if (!task) { return; }
    this.tasks.push(task);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.editMode[i] = false;
  }

  editModeToggle(i:number) {
    if(this.editMode[i] == true) {
      this.editMode[i] = false;
    } else {
      this.editMode[i] = true;
    }
  }

  editTask(i: number, newTask: string) {
    if(this.editMode[i] == true){
      this.tasks[i] = newTask;
    }
    this.editMode[i] = false;
  }
}
