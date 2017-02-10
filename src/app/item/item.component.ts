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
  // FIXME: Event handlers' identifiers should follow the pattern "on<EventDescription>", e.g. onEditedTaskSubmit.
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
    // FIXME: Rewrite the function's body in 1 line.
  }

  ngOnInit() {

  }

}
