import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() task: string;
  @Output() taskDeleted: EventEmitter<any> = new EventEmitter();
  editMode: boolean;

  constructor() { }

  editTask(edTask: string) {
    this.task = edTask;
  }

  deleteTask() {
    this.taskDeleted.emit();
  }

  editModeToggle() {
    if(this.editMode == true) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

  ngOnInit() {

  }

}
