<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_CONTAINER,
});
</script>