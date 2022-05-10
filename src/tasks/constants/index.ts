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
      name: "research",
      value: 1
    },
    {
      name: "planning",
      value: 2
    },
    {
      name: "design",
      value: 3
    },
    {
      name: "content",
      value: 4
    },
  ],
  USERS: [
    {
      name: "Heny",
      image: "https://unsplash.com/photos/WNoLnJo7tS8",
      value: "heny",
    },
    {
      name: "Meera",
      image: "https://unsplash.com/photos/TJDvP6xm2Eo",
      value: "meera",
    },
    {
      name: "Riya",
      image: "https://unsplash.com/photos/xPTFWp2NnLM",
      value: "riya",
    },
    {
      name: "Jisa",
      image: "https://unsplash.com/photos/rIl4qosDTaM",
      value: "jisa",
    },
    {
      name: "Jiya",
      image: "https://unsplash.com/photos/T7dkqIcBa38",
      value: "jiya",
    },
  ],
  VALIDATION_MESSAGE: {
    REQUIRED: "This field is required"
  }
};

export { TaskConstants };
