<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DashboardConstants } from "@/dashboard/constants";

export default defineComponent({
  name: DashboardConstants.NAME.DASHBOARD_CONTAINER,
});
</script>
