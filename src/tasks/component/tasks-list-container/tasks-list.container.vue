<template>
  <TasksListPresentation
    :taskListData="taskList"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import TasksListPresentation from "@/tasks/component/tasks-list-container/tasks-list-presentation/tasks-list.presentation.vue";
import { TaskServices } from "@/tasks/services/tasks.service";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_LIST_CONTAINER,
  components: {
    TasksListPresentation,
  },
  data() {
    return {
      taskList: new Array<any>(),
    };
  },
  async created() {
    await TaskServices.getTasks().then((response) => {
      this.taskList = response;
    });
  },
});
</script>
