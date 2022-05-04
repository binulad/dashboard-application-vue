import { createRouter, createWebHistory } from "vue-router";
import TicketsRoutes from "@/tickets/router";
import DashboardRoutes from "@/dashboard/router";
import TasksRoutes from "@/tasks/router";

const AppShell = () =>
  import(/* webpackChunkName: "App Shell" */ "@/components/AppShell.vue");
const Dashboard = () =>
  import(
    /* webpackChunkName: "Dashboard" */ "@/dashboard/component/dashboard-container/dashboard.container.vue"
  );
const Tickets = () =>
  import(
    /* webpackChunkName: "Tickets" */ "@/tickets/component/tickets-container/tickets.container.vue"
  );
const Tasks = () =>
  import(
    /* webpackChunkName: "Tasks" */ "@/tasks/component/tasks-container/tasks.container.vue"
  );

const appShellRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: DashboardRoutes,
    meta: { pageTitle: "Dashboard", breadcrumb: [{name: "Dashboard"}] },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
    children: TicketsRoutes,
    meta: { pageTitle: "Tickets", breadcrumb: [{name: "Tickets"}] },
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
    children: TasksRoutes,
    meta: { pageTitle: "Tasks", breadcrumb: [{name: "Tasks"}] },
  },
];

const routes: any = [
  {
    path: "/",
    name: "Home",
    component: AppShell,
    children: appShellRoutes,
    meta: { pageTitle: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
