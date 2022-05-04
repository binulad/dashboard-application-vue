<template>
  <!-- Table Action Area -->
  <table-action-content>
    <button type="button" class="btn btn-primary" @click="addData()">
      Add Data
    </button>
  </table-action-content>
  <!-- End: Table Action Area -->
  <div class="card border-0 h-100 shadow">
    <!-- Ticket List Presentation -->
    <div class="overflow-hidden d-flex flex-column flex-grow-1 py-3">
      <div class="overflow-auto rounded px-3">
        <base-listing
          :columns="columns"
          :defaultSort="'id'"
          :dataItemList="dashboardDataList"
        >
          <template #tooltipTemplate="{ props }">
            <span :title="props">{{ props }}</span>
          </template>
          <template #actionTemplate>
            <div class="tableAction">
              <span class="icon icon-more_vert"></span>
            </div>
          </template>
        </base-listing>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DashboardConstants } from "@/dashboard/constants";
import BaseListing from "@/components/BaseListing.vue";
import TableActionContent from "@/components/TableActionContent.vue";

export default defineComponent({
  name: DashboardConstants.NAME.DASHBOARD_LIST_CONTAINER,
  components: {
    BaseListing,
    TableActionContent
  },
  data() {
    return {
      columns: [
        {
          field: "id",
          title: "ID",
          sortable: true,
          cell: "tooltipTemplate",
        },
        {
          field: "firstName",
          title: "First Name",
          sortable: false,
          cell: "tooltipTemplate",
        },
        {
          field: "lastName",
          title: "Last Name",
          sortable: true,
          cell: "tooltipTemplate",
        },
        {
          field: "action",
          title: "Action",
          cell: "actionTemplate",
        },
      ],
      dashboardDataList: new Array<any>(),
    };
  },
  created() {
    this.dashboardDataList = [
      {
        id: 1,
        firstName: "Test",
        lastName: "User",
      },
      {
        id: 2,
        firstName: "Test2",
        lastName: "User2",
      },
      {
        id: 11,
        firstName: "Test11",
        lastName: "User11",
      },
      {
        id: 21,
        firstName: "Test21",
        lastName: "User21",
      },
    ];
  },
  methods: {
    addData() {
      this.$router.push({name: DashboardConstants.ROUTE.DATA})
    }
  }
});
</script>
