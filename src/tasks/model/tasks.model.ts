export enum Status {
  Backlog = 1,
  ToDo = 2,
  InProgress = 3,
  NeedReview = 4,
}

export class Task {
  id: number;
  taskName: string;
  taskDesc: string;
  assignee: string;
  status: number;
  category: string;
  createdDate: string;
  createdBy: string;

  constructor(
    id: number,
    taskName: string,
    taskDesc: string,
    assignee: string,
    status: number,
    category: string,
    createdDate: string,
    createdBy: string
  ) {
    this.id = id;
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.assignee = assignee;
    this.status = status;
    this.category = category;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
  }
}
export class EditTask {
  public id: number;
  taskName: string;
  taskDesc: string;
  assignee: string;
  status: number;
  category: string;
  createdDate: string;
  createdBy: string;

  constructor(
    id: number,
    taskName: string,
    taskDesc: string,
    assignee: string,
    status: number,
    category: string,
    createdDate: string,
    createdBy: string
  ) {
    this.id = id;
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.assignee = assignee;
    this.status = status;
    this.category = category;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
  }
}
export class TaskUpdate {
  taskName: string;
  taskDesc: string;
  assignee: string;
  status: number;
  category: string;
  createdDate: string;
  createdBy: string;

  constructor(
    taskName: string,
    taskDesc: string,
    assignee: string,
    status: number,
    category: string,
    createdDate: string,
    createdBy: string
  ) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.assignee = assignee;
    this.status = status;
    this.category = category;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
  }
}
