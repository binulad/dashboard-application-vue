const dashboardList = () =>
  import(
    /* webpackChunkName: "dashboardList" */ "@/dashboard/component/dashboard-list-container/dashboard-list.container.vue"
  );
const dashboardData = () => import(/* webpackChunkName: "dashboardData" */ "@/dashboard/component/dashboard-data-container/dashboard-data.container.vue");

const DashboardRoutes = [
  {
    path: "",
    name: "Dashboard Listing",
    component: dashboardList,
  },
  {
    path: "data",
    name: "Data",
    component: dashboardData,
  },
];

export default DashboardRoutes;