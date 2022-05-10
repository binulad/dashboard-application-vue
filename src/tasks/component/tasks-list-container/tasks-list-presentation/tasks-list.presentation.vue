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
        <div class="task-board__title">{{ column.name }}</div>
        <span class="task-board__count">{{
          filterTasks(column.value).length
        }}</span>
        <button
          type="button"
          title="Add New"
          class="task-board__button ms-auto"
          @click="addNewTask(column.value)"
        >
          <span class="icon icon-add"></span>
        </button>
      </header>

      <TasksCardPresentation
        v-if="isShow"
        :taskList="filterTasks(column.value)"
        :columnId="column.value"
        @taskListDetail="taskListDetail($event)"
        @deleteTask="onDelete($event)"
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
import { Status } from "@/tasks/model/tasks.model";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_LIST_PRESENTATION,
  components: {
    TableActionContent,
    TasksCardPresentation,
  },
  props: ["taskListData"],
  emits: ["updateTaskList", "onDeleteTask"],
  data() {
    return {
      columns: TaskConstants.STATUS,
      tasks: new Array<any>(),
      isShow: false,
    };
  },
  created() {
    this.loadListData(this.taskListData);
  },
  watch: {
    taskListData(newValue) {
      this.loadListData(newValue);
    },
  },
  methods: {
    // Load ListData
    loadListData(taskData: any) {
      this.tasks = taskData;
      this.isShow = true;
    },

    // Method click while click on Add button
    onAddClick() {
      this.$router.push({ name: TaskConstants.ROUTE.ADD });
    },

    // Method called while adding new Task
    addNewTask(columnValue: number) {
      this.$router.push({
        name: TaskConstants.ROUTE.ADD,
        params: { statusValue: columnValue },
      });
    },

    // Get filter tasks
    filterTasks(value: number) {
      return this.tasks.filter((item) => item.status == value);
    },

    getStatus(data: number) {
      let title;
      switch (data) {
        case Status.Backlog:
          title = TaskConstants.STATUS[0].name;
          break;
        case Status.ToDo:
          title = TaskConstants.STATUS[1].name;
          break;
        case Status.InProgress:
          title = TaskConstants.STATUS[2].name;
          break;
        case Status.NeedReview:
          title = TaskConstants.STATUS[3].name;
          break;
      }

      return title;
    },

    // Update List
    taskListDetail(details: any) {
      this.$emit("updateTaskList", details);
    },

    // Method called while click on Delete
    onDelete(taskId: any) {
      this.$emit("onDeleteTask", taskId);
    },
  },
});
</script>
