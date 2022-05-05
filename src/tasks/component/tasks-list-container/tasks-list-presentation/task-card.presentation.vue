<template>
  <ul class="task-item__list" @dragover.prevent @drop="drop($event, columnId)">
    <li
      v-for="task in taskData"
      :key="task.id"
      class="task-item"
      :draggable="true"
      :id="task.id"
      @dragstart="drag($event, task.id)"
      @click.stop
      @dragover.prevent
    >
      <span class="task-item__category" :class="'bg-' + task.category">{{
        task.category
      }}</span>
      <h4 class="task-item__title">{{ task.taskName }}</h4>
      <p class="task-item__desc">{{ task.taskDesc }}</p>
      <ul class="task-item__users">
        <li class="user"></li>
        <li class="user"></li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import store from "@/tasks/store";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_CARD_PRESENTATION,
  props: ["taskList", "columnId"],
  emits: ["taskListDetail"],
  data() {
    return {
      taskData: new Array<any>(),
      dragElement: false,
    };
  },
  created() {
    this.taskData = this.taskList;
  },
  methods: {
    // Method called when drag element
    drag(ev: any, taskId: any) {
      ev.dataTransfer.setData("taskId", taskId);
    },

    // Method called when drop element
    drop(ev: any, columnId: number) {
      const taskId: any = ev.dataTransfer.getData("taskId");
      ev.target.appendChild(document.getElementById(taskId));

      const taskObj = {
        taskId: taskId,
        columnId: columnId,
      };
      this.$emit("taskListDetail", taskObj);
    },
  },
});
</script>
