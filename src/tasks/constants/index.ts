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
  TASK_CATEGORY: [
    {
      name: "Research",
      value: 1
    },
    {
      name: "Planning",
      value: 2
    },
    {
      name: "Design",
      value: 3
    },
    {
      name: "Content",
      value: 4
    },
  ],
  USERS: [
    {
      name: "Heny",
      image: "user1.jpg",
      value: "heny",
    },
    {
      name: "Meera",
      image: "user2.jpg",
      value: "meera",
    },
    {
      name: "Riya",
      image: "user3.jpg",
      value: "riya",
    },
    {
      name: "Jisa",
      image: "user1.jpg",
      value: "jisa",
    },
    {
      name: "Jiya",
      image: "user3.jpg",
      value: "jiya",
    },
  ],
  VALIDATION_MESSAGE: {
    REQUIRED: "This field is required"
  }
};

export { TaskConstants };
