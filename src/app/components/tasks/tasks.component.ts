import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTaskModalVisible = false;
  
  // constructor injection is managed by the Angular framework
  constructor(private tasksService: TasksService) {}

  get filteredTasks() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onAddTask() {
    this.isAddingTaskModalVisible = true;
  }

  onCancelAddingTask(cancel: boolean) {
    this.isAddingTaskModalVisible = cancel;
  }

  onUserAddTask(task: Task) {
    task.userId = this.userId;
    this.tasksService.addTask(task);
  }
}
