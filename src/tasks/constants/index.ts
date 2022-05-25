const TaskConstants = {
  NAME: {
    TASKS_CONTAINER: "TasksContainer",
    TASKS_LIST_CONTAINER: "TasksListContainer",
    TASKS_LIST_PRESENTATION: "TasksListPresentation",
    TASKS_FORM_CONTAINER: "TasksFormContainer",
    TASKS_FORM_PRESENTATION: "TasksFormPresentation",
    TASKS_CARD_PRESENTATION: "TasksCardPresentation",
  },
  ROUTE: {
    ADD: "Add Tasks",
    EDIT: "Edit Tasks",
    DEFAULT: "Task Listing",
  },
  API_URL: {
    TASKS: "tasks",
  },
  STATUS:[
    {
      name: "Backlog",
      value: 1
    },
    {
      name: "To Do",
      value: 2
    },
    {
      name: "In Progress",
      value: 3
    },
    {
      name: "Needs Review",
      value: 4
    }
  ],
};

export { TaskConstants };
