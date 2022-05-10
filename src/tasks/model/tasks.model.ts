export enum Status {
  Backlog = 1,
  ToDo = 2,
  InProgress = 3,
  NeedReview = 4,
}

export enum Category {
  Research = 1,
  Planning = 2,
  Design = 3,
  Content = 4,
}

export class Task {
  id: number;
  taskName: string;
  taskDesc: string;
  assignee: string | string[];
  status: number;
  category: number;
  createdDate: string;
  createdBy: string;

  constructor(
    id: number,
    taskName: string,
    taskDesc: string,
    assignee: string | string[],
    status: number,
    category: number,
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
  assignee: string | string[];
  status: number;
  category: number;
  createdDate: string;
  createdBy: string;

  constructor(
    id: number,
    taskName: string,
    taskDesc: string,
    assignee: string | string[],
    status: number,
    category: number,
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
export class TaskAddUpdate {
  taskName?: string;
  taskDesc?: string;
  assignee?: string | string[];
  status?: number;
  category?: string;
  createdDate?: string;
  createdBy?: string;

  constructor(
    taskName?: string,
    taskDesc?: string,
    assignee?: string | string[],
    status?: number,
    category?: string,
    createdDate?: string,
    createdBy?: string
  ) {
    this.taskName = taskName || "";
    this.taskDesc = taskDesc || "";
    this.assignee = assignee || "";
    this.status = status;
    this.category = category || "";
    this.createdDate = createdDate || "";
    this.createdBy = createdBy || "";
  }
}
