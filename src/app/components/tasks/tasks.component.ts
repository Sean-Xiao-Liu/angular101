import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

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
}
