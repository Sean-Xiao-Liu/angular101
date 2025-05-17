export interface Task {
    id: string;
    userId: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string;
    dueDate: string;
  }