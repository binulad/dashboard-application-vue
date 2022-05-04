const ticketsList = () =>
  import(
    /* webpackChunkName: "ticketsList" */ "@/tickets/component/tickets-list-presentation/tickets-list.presentation.vue"
  );
const ticketsForm = () =>
  import(
    /* webpackChunkName: "ticketsForm" */ "@/tickets/component/tickets-form-presentation/tickets-form.presentation.vue"
  );

const TicketsRoutes = [
  {
    path: "",
    name: "Listing",
    component: ticketsList,
  },
  {
    path: "add",
    name: "Add Tickets",
    component: ticketsForm,
  },
  {
    path: "edit/:id",
    name: "Edit Tickets",
    component: ticketsForm,
  },
];

export default TicketsRoutes;
