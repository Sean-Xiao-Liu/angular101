import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  // FormsModule is a module that provides the ngForm directive
  // need to import it in the component so ngModel is available
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() addTask = new EventEmitter<Task>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  onCancel() {
    this.cancel.emit(false);
  }

  onSubmit() {
    this.addTask.emit({
      id: 't' + Math.floor(Math.random() * 10+4),
      userId: '',
      title: this.enteredTitle,
      description: this.enteredSummary,
      dueDate: this.enteredDueDate,
      completed: false,
      createdAt: new Date().toISOString()
    });
  }

  onPreview() {
    alert("check the console for the task details");
    console.log("Printing the task: \n", "title: ", this.enteredTitle, "\n", "summary: ", this.enteredSummary, "\n", "due date:  ", this.enteredDueDate);
  }
}
