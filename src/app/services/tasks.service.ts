import { Injectable } from '@angular/core';
import { Task } from '../components/tasks/task/task.model';
import { DUMMY_TASKS } from '../../assets/tasks/dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private readonly STORAGE_KEY = 'tasks';

  constructor() {
    // 从 localStorage 加载数据，如果没有则使用 DUMMY_TASKS
    const storedTasks = localStorage.getItem(this.STORAGE_KEY);
    console.log("Trying to load tasks from localStorage");
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [...DUMMY_TASKS];
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