import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../../assets/tasks/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
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

  get filteredTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
