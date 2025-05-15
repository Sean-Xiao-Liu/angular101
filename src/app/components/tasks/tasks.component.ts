import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { DUMMY_TASKS } from '../../../assets/tasks/dummy-tasks';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: true
})

export class TasksComponent {
  // the name property is passed from the app.component.html file
  // and the name property is used in the tasks.component.html file
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  tasks = DUMMY_TASKS;
  isAddingTaskModalVisible = false;

  get filteredTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    // filter out the task with the given id when the user clicks the complete button
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.isAddingTaskModalVisible = true;
  }

  onCancelAddingTask(cancel: boolean) {
    this.isAddingTaskModalVisible = cancel;
  }
}
