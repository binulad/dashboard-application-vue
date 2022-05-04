export class Tickets {
  id: string;
  subject: string;
  assignee: string;
  requestedBy: string;
  priority: string;
  status: string;
  createdDate: string;
  dueDate: string;

  constructor(
    id: string,
    subject: string,
    assignee: string,
    requestedBy: string,
    priority: string,
    status: string,
    createdDate: string,
    dueDate: string
  ) {
    this.id = id;
    this.subject = subject;
    this.assignee = assignee;
    this.requestedBy = requestedBy;
    this.priority = priority;
    this.status = status;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
  }
}

export class AddUpdateTickets {
  subject?: string;
  assignee?: string;
  requestedBy?: string;
  priority?: string;
  status?: string;
  createdDate?: string;
  dueDate?: string;

  constructor(
    subject?: string,
    assignee?: string,
    requestedBy?: string,
    priority?: string,
    status?: string,
    createdDate?: string,
    dueDate?: string
  ) {
    this.subject = subject || "";
    this.assignee = assignee || "";
    this.requestedBy = requestedBy || "";
    this.priority = priority || "";
    this.status = status || "";
    this.createdDate = createdDate || "";
    this.dueDate = dueDate || "";
  }
}

export class EditTickets {
  public id: string;
  subject: string;
  assignee: string;
  requestedBy: string;
  priority: string;
  status: string;
  createdDate: string;
  dueDate: string;

  constructor(
    id: string,
    subject: string,
    assignee: string,
    requestedBy: string,
    priority: string,
    status: string,
    createdDate: string,
    dueDate: string
  ) {
    this.id = id;
    this.subject = subject;
    this.assignee = assignee;
    this.requestedBy = requestedBy;
    this.priority = priority;
    this.status = status;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
  }
}