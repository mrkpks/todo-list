import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<any> = new EventEmitter();
  editMode: boolean;

  constructor() { }

  onEditTask(edTask: string) {
    this.task.name = edTask;
  }

  onDeleteTask() {
    this.taskDeleted.emit();
  }

  onEditModeToggle() {
    this.editMode == true ? this.editMode = false : this.editMode = true;
  }

  ngOnInit() {

  }

}
