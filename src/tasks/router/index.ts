const tasksList = () =>
  import(
    /* webpackChunkName: "tasksList" */ "@/tasks/component/tasks-list-container/tasks-list.container.vue"
  );
const tasksForm = () =>
  import(
    /* webpackChunkName: "tasksForm" */ "@/tasks/component/tasks-form-container/tasks-form.container.vue"
  );

const TasksRoutes = [
  {
    path: "",
    name: "Task Listing",
    component: tasksList,
  },
  {
    path: "add",
    name: "Add Tasks",
    component: tasksForm,
  },
  {
    path: "edit/:id",
    name: "Edit Tasks",
    component: tasksForm,
  },
];

export default TasksRoutes;
