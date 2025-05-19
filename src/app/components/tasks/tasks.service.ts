import { Injectable } from '@angular/core';
import { Task } from './task/task.model';
import { DUMMY_TASKS } from '../../../assets/tasks/dummy-tasks';

// @Injectable is a decorator that marks a class as injectable
// providedIn: 'root' means that the service is provided in the root module
// so it can be injected into any component in the app
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasks: Task[] = [];
  private readonly STORAGE_KEY = 'tasks';

  constructor() {
    // load data from localStorage, if not, use DUMMY_TASKS
    const storedTasks = localStorage.getItem(this.STORAGE_KEY);
    console.log("Trying to load tasks from localStorage");
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [...DUMMY_TASKS];
    console.log("Tasks loaded from localStorage: ", this.tasks);
  }

  private saveTasks() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  getTasksByUserId(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }
} 