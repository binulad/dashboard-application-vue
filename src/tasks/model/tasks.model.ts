export class TaskList {
  public title: string;
  public task: Task[];
  constructor(title: string, task: Task[]) {
    this.title = title;
    this.task = task;
  }
}
export class Task {
  taskName: string;
  taskDesc: string;
  assignee: string;
  category: string;
  createdDate: string;
  createdBy: string;

  constructor(
    taskName: string,
    taskDesc: string,
    assignee: string,
    category: string,
    createdDate: string,
    createdBy: string
  ) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.assignee = assignee;
    this.category = category;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
  }
}
