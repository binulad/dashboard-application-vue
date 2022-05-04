<template>
  <!-- Table Action Content -->
  <TableActionContent>
    <button type="button" class="btn btn-primary" @click="onAddClick()">
      Add Task
    </button>
  </TableActionContent>
  <!-- End: Table Action Content -->

  <!-- Task Listing Board -->
  <div class="task-board__wrapper row">
    <div class="task-board col" v-for="(column, index) in columns" :key="index">
      <header class="d-flex align-items-center mb-2">
        <div class="task-board__title">{{ column.title }}</div>
        <span class="task-board__count">{{ column.task.length }}</span>
        <button
          type="button"
          title="Add New"
          class="task-board__button ms-auto"
          @click="addNewTask(index)"
        >
          <span class="icon icon-add"></span>
        </button>
      </header>

      <TasksCardPresentation
        :taskList="column.task"
        @taskListUpdate="updateTaskList($event)"
      />
    </div>
  </div>
  <!-- End: Task Listing Board -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import TableActionContent from "@/components/TableActionContent.vue";
import TasksCardPresentation from "@/tasks/component/tasks-list-container/tasks-list-presentation/task-card.presentation.vue";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_LIST_PRESENTATION,
  components: {
    TableActionContent,
    TasksCardPresentation,
  },
  props: ["taskListData"],
  emits: ["isUpdateTaskList"],
  data() {
    return {
      columns: new Array<any>(),
    };
  },
  created() {
    setTimeout(() => {
      this.columns = this.taskListData;
    }, 500);
  },
  methods: {
    // Method click while click on Add button
    onAddClick() {
      this.$router.push({ name: TaskConstants.ROUTE.ADD });
    },

    // Method called while adding new Task
    addNewTask(index: number) {
      console.log(index);
    },

    // Update Task List
    updateTaskList(isUpdate: boolean) {
      this.$emit("isUpdateTaskList", isUpdate);
    },
  },
});
</script>
