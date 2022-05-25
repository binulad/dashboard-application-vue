<template>
  <TasksListPresentation
    v-if="isShow"
    :taskListData="taskList"
    @updateTaskList="updateTaskList($event)"
    @onDeleteTask="onDeleteTask($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import TasksListPresentation from "@/tasks/component/tasks-list-container/tasks-list-presentation/tasks-list.presentation.vue";
import { TaskServices } from "@/tasks/services/tasks.service";
import store from "@/tasks/store";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_LIST_CONTAINER,
  components: {
    TasksListPresentation,
  },
  data() {
    return {
      taskList: new Array<any>(),
      isShow: false,
    };
  },
  computed: {
    getUpdatedData() {
      return store.getters.getTaskList;
    },
  },
  watch: {
    getUpdatedData(newValue) {
      if (newValue) {
        this.getTaskList();
      }
    },
  },
  created() {
    this.getTaskList();
  },
  methods: {
    // Load Task Data
    async getTaskList() {
      await TaskServices.getTasks().then((response) => {
        this.taskList = response;
        this.isShow = true;
      });
    },

    // Update Task List while Drag and Drop Task
    updateTaskList(taskDetail: any) {
      TaskServices.getTaskById(taskDetail.taskId).then((taskResponse) => {
        taskResponse.status = taskDetail.columnId;
        store.dispatch("updateTaskList", false);
        TaskServices.editTask(taskDetail.taskId, taskResponse).then(() => {
          store.dispatch("updateTaskList", true);
        });
      });
    },

    // Delete Task
    onDeleteTask(taskId: any) {
      store.dispatch("updateTaskList", false);
      TaskServices.deleteTask(taskId).then(() => {
        store.dispatch("updateTaskList", true);
      });
    },
  },
});
</script>
