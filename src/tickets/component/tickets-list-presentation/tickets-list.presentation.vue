<template>
  <!-- Table Action Content -->
  <TableActionContent>
    <button type="button" class="btn btn-primary" @click="openTicketForm()">
      Add Ticket
    </button>
  </TableActionContent>
  <!-- End: Table Action Content -->

  <div class="d-flex flex-column h-100 overflow-hidden">
    <!-- Tickets Info Area -->
    <TicketsInfoPresentation
      :deletedTickets="getDeletedTickets"
      :ticketDataList="ticketsList"
      class="flex-shrink-0"
    />
    <!-- End: Tickets Info Area -->

    <div class="card border-0 h-100 shadow flex-grow-1 h-100 overflow-hidden">
      <!-- Ticket List Presentation -->
      <div class="overflow-hidden d-flex flex-column flex-grow-1 py-3">
        <div class="overflow-auto rounded px-3">
          <table
            class="table position-relative mb-0"
            aria-describedby="Ticket Listing"
          >
            <thead class="sticky-table-header">
              <tr>
                <th scope="col" v-for="item in columns" :key="item.field">
                  <a
                    href="#"
                    class="header-data"
                    :class="getSortOrder(item.field)"
                    @click="sortColumn(item.field)"
                  >
                    <span>
                      {{ item.title }}
                    </span>
                    <span v-if="item.sortable" class="sort"></span>
                  </a>
                </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="filterTicketsData.length">
                <tr v-for="(ticket, index) in filterTicketsData" :key="index">
                  <td>{{ ticket.id }}</td>
                  <td>{{ ticket.subject }}</td>
                  <td>{{ capitalizeValue(ticket.requestedBy) }}</td>
                  <td>{{ capitalizeValue(ticket.assignee) }}</td>
                  <td>
                    <span
                      class="badge rounded-pill"
                      :class="getPriority(ticket.priority)[0]"
                    >
                      {{ getPriority(ticket.priority)[1] }}
                    </span>
                  </td>
                  <td>
                    <span
                      class="badge rounded-pill"
                      :class="getStatus(ticket.status)[0]"
                    >
                      {{ getStatus(ticket.status)[1] }}
                    </span>
                  </td>
                  <td>{{ ticket.createdDate }}</td>
                  <td>{{ ticket.dueDate }}</td>
                  <td class="table-action">
                    <div
                      class="dropdown d-inline-block"
                      :id="'dropdownRef' + ticket.id"
                    >
                      <button
                        class="btn btn-link d-flex align-items-center justify-content-center"
                        type="button"
                        title="More Action"
                        @click="openDropdown(ticket.id)"
                      >
                        <span class="icon icon-more_vert"></span>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end border-0 shadow p-0"
                        :ariaLabelledby="'dropdownMenuButton' + ticket.id"
                        :class="{
                          show:
                            this.dropdownIndex == ticket.id &&
                            this.isShowDropdown,
                        }"
                      >
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="onEdit(ticket.id)"
                            ><span class="icon icon-edit me-2"></span>Edit</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click="onDelete(ticket.id)"
                            ><span class="icon icon-delete me-2"></span
                            >Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="9" class="text-muted text-center">
                    No Record Found
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <!-- End: Ticket List Presentation -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { TicketsConstants } from "@/tickets/constants";
import { TicketServices } from "@/tickets/services/tickets.service";
import { Constants } from "@/constants";
import TableActionContent from "@/components/TableActionContent.vue";
import store from "@/store";
import TicketsInfoPresentation from "@/tickets/component/tickets-list-presentation/tickets-info.presentation.vue";
import ticketStore from "@/tickets/store";

export default defineComponent({
  name: TicketsConstants.NAME.TICKETS_LIST_PRESENTATION,
  components: {
    TableActionContent,
    TicketsInfoPresentation,
  },
  data() {
    return {
      ticketsList: new Array<any>(),
      columns: [
        {
          field: "id",
          title: "ID",
          sortable: true,
        },
        {
          field: "subject",
          title: "Subject",
          sortable: true,
        },
        {
          field: "requestedBy",
          title: "Requested by",
          sortable: true,
        },
        {
          field: "assignee",
          title: "Assignee",
          sortable: true,
        },
        {
          field: "priority",
          title: "Priority",
          sortable: true,
        },
        {
          field: "status",
          title: "Status",
          sortable: true,
        },
        {
          field: "createdDate",
          title: "Create Date",
          sortable: true,
        },
        {
          field: "dueDate",
          title: "Due Date",
          sortable: true,
        },
      ],
      sortBy: "id",
      sortDirection: Constants.SORT_DIRECTION.ASCENDING,
      sortOrders: new Array<any>(),
      dropdownIndex: 0,
      isShowDropdown: false,
      dropdownRef: HTMLElement as any,
      ticketPriority: "",
      ticketStatus: "",
      ticketsDataList: new Array<any>(),
      deletedTickets: 0,
    };
  },
  async created() {
    // Event listener for close the dropdown on outside click
    document.addEventListener("click", this.closeDropdown);

    // Call loadTicketsData function to get tickets data
    await this.loadTicketsData();
  },
  mounted() {
    this.loadTicketsData();
    this.getSortOrder("id");
    this.sortOrders = this.columns.reduce(
      (obj: any, key: any) => ((obj[key.field] = 1), obj),
      {}
    );
  },
  beforeUnmount() {
    // Event listener for close the dropdown on outside click
    document.removeEventListener("click", this.closeDropdown);
  },
  watch: {
    getAllData(newValue) {
      if (newValue) {
        this.loadTicketsData();
      }
    },
    deletedTickets(oldValue, newValue) {
      if (newValue) {
        return newValue;
      } else {
        return oldValue;
      }
    },
  },
  computed: {
    filterTicketsData(): any[] {
      const sortKey: any = this.sortBy;
      const order = this.sortOrders[sortKey] || 1;
      let data: any = this.ticketsList;

      // Sort Data
      if (sortKey) {
        data = data.slice().sort((a: any, b: any) => {
          a = a[sortKey];
          b = b[sortKey];

          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
    getAllData() {
      return store.getters.getAllData;
    },
    getDeletedTickets() {
      return ticketStore.getters.getDeletedData;
    },
  },
  methods: {
    async loadTicketsData() {
      await TicketServices.getTickets().then((response) => {
        this.ticketsList = response;
      });
    },

    // Column Sorting
    sortColumn(field: any) {
      this.sortDirection = this.sortDirection == "asc" ? "desc" : "asc";
      this.sortBy = field;
      this.sortOrders[field] = this.sortOrders[field] * -1;
    },

    // Get Sort Order
    getSortOrder(key: any) {
      if (key == this.sortBy) {
        return this.sortOrders[key] > 0 ? "asc" : "desc";
      }
    },

    // Open Dropdown
    openDropdown(index: any) {
      if (this.dropdownIndex == index && this.isShowDropdown) {
        this.isShowDropdown = false;
      } else {
        this.isShowDropdown = true;
      }
      this.dropdownIndex = index;
    },

    // Close Dropdown
    closeDropdown(e: any) {
      this.dropdownRef = document.getElementById(
        "dropdownRef" + this.dropdownIndex
      );
      if (!this.dropdownRef.contains(e.target)) {
        this.isShowDropdown = false;
      }
    },

    // Set Priority
    getPriority(value: any): any {
      let priority: any;
      let priorityText: any;
      switch (value) {
        case "high":
          priority = "bg-danger";
          priorityText = TicketsConstants.PRIORITY_DATA.HIGH;
          break;
        case "medium":
          priority = "bg-info";
          priorityText = TicketsConstants.PRIORITY_DATA.MEDIUM;
          break;
        case "low":
          priority = "bg-warning";
          priorityText = TicketsConstants.PRIORITY_DATA.LOW;
          break;
      }
      return [priority, priorityText];
    },

    // Set Status
    getStatus(value: any): any {
      let status: any;
      let statusValue: any;
      switch (value) {
        case "open":
          status = "bg-success";
          statusValue = TicketsConstants.STATUS.OPEN;
          break;
        case "closed":
          status = "bg-secondary";
          statusValue = TicketsConstants.STATUS.CLOSED;
          break;
      }
      return [status, statusValue];
    },

    // Open Ticket Form
    openTicketForm() {
      this.$router.push({ name: TicketsConstants.ROUTE.ADD });
    },

    // Delete Record
    onDelete(ticketId: any) {
      store.dispatch("setAllData", false);
      TicketServices.deleteTicket(ticketId).then(() => {
        store.dispatch("setAllData", true);
      });
      this.deletedTickets++;
      ticketStore.dispatch("getDeletedItem", this.deletedTickets);
    },

    // Edit Record
    onEdit(ticketId: any) {
      setTimeout(() => {
        this.$router.push({
          name: TicketsConstants.ROUTE.EDIT,
          params: { id: ticketId },
        });
      }, 200);
    },

    // Method called when capitalize first character of string
    capitalizeValue(value: any) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
});
</script>
