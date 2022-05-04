<template>
  <div class="row mb-3">
    <div class="col-3" v-for="(item, index) in ticketInfoArray" :key="index">
      <div class="card ticket-info">
        <div class="card-body d-flex align-items-center">
          <div class="flex-shrink-0 me-3 ticket-info__icon" :class="item.type">
            <span class="icon" :class="item.icon"></span>
          </div>
          <div>
            <h5 class="mt-0 ticket-info__number">{{ item.value }}</h5>
            <p class="ticket-info__text">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { TicketsConstants } from "@/tickets/constants";

export default defineComponent({
  name: TicketsConstants.NAME.TICKETS_INFO_PRESENTATION,
  props: ["ticketDataList", "deletedTickets"],
  setup(props) {
    const totalTickets = ref(0);
    const pendingTickets = ref(0);
    const closedTickets = ref(0);
    const deletedTickets = ref(0);
    const ticketInfoArray = ref([
      {
        name: "Total Tickets",
        value: totalTickets,
        icon: "icon-fiber_smart_record",
        type: "info",
      },
      {
        name: "Pending Tickets",
        value: pendingTickets,
        icon: "icon-hourglass_empty",
        type: "warning",
      },
      {
        name: "Closed Tickets",
        value: closedTickets,
        icon: "icon-https",
        type: "success",
      },
      {
        name: "Deleted Tickets",
        value: deletedTickets,
        icon: "icon-delete",
        type: "danger",
      },
    ]);

    watchEffect(() => {
      
      // Get Total number of Tickets
      totalTickets.value = props.ticketDataList.length;

      // Get Total Pending Tickets
      const pendingData: any[] = props.ticketDataList.filter((item: any) => {
        if (item.status == "open") {
          return true;
        }
      });
      pendingTickets.value = pendingData.length;

      // Get Total Closed Tickets
      const closedData: any[] = props.ticketDataList.filter((item: any) => {
        if (item.status == "closed") {
          return true;
        }
      });
      closedTickets.value = closedData.length;

      deletedTickets.value = props.deletedTickets
      
    });

    return {
      ticketInfoArray,
      props,
    };
  },
});
</script>
