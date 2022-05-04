<template>
  <ul class="task-item__list" @dragover.prevent @drop="drop($event)">
    <li
      v-for="task in taskData"
      :key="task.id"
      class="task-item"
      :draggable="true"
      :id="task.id"
      @dragstart="drag($event)"
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
  props: ["taskList"],
  emits: ["taskListUpdate"],
  data() {
    return {
      taskData: new Array<any>(),
      dragElement: false,
    };
  },
  async created() {
    this.taskData = await this.taskList;
  },
  computed: {
    isTaskListUpdate() {
      return store.getters.getTaskList
    }
  },
  watch: {
    isTaskListUpdate(newValue) {
      this.$emit("taskListUpdate", newValue);
    },
  },
  methods: {
    // Method called when drag element
    drag(ev: any) {
      ev.dataTransfer.setData("text", ev.target.id);
    },

    // Method called when drop element
    drop(ev: any) {
      const text: any = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(text));
      store.dispatch("updateTaskList", true);
    },
  },
});
</script>
