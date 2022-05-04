<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TicketsConstants } from "@/tickets/constants";

export default defineComponent({
  name: TicketsConstants.NAME.TICKETS_CONTAINER,
});
</script>
