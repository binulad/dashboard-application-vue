<template>
  <TasksFormPresentation />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import TasksFormPresentation from "@/tasks/component/tasks-form-container/tasks-form-presentation/tasks-form.presentation.vue";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_FORM_CONTAINER,
  components: {
    TasksFormPresentation,
  },
});
</script>
