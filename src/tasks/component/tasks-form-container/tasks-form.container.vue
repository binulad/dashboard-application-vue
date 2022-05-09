<template>
  <TasksFormPresentation
    v-if="isEdit"
    :taskData="taskDetails"
    @saveTaskData="onSubmitTask($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import TasksFormPresentation from "@/tasks/component/tasks-form-container/tasks-form-presentation/tasks-form.presentation.vue";
import { TaskServices } from "@/tasks/services/tasks.service";
import { TaskAddUpdate } from "@/tasks/model/tasks.model";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_FORM_CONTAINER,
  components: {
    TasksFormPresentation,
  },
  data() {
    return {
      taskDetails: new TaskAddUpdate(),
      isEdit: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    if (this.id) {
      TaskServices.getTaskById(this.id).then((response) => {
        this.taskDetails = response;
        this.isEdit = true;
      });
    } else {
      this.isEdit = true;
    }
  },
  methods: {
    // Method called while Save Task Data
    onSubmitTask(taskData: any) {
      if (this.id) {
        TaskServices.editTask(this.id, taskData).then(() => {
          this.$router.push({ name: TaskConstants.ROUTE.DEFAULT });
        });
      } else {
        TaskServices.addUpdateTask(taskData).then(() => {
          this.$router.push({ name: TaskConstants.ROUTE.DEFAULT });
        });
      }
    },
  },
});
</script>
