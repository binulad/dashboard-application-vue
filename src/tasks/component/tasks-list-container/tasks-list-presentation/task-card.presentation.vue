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
      <span
        class="task-item__category"
        :class="'bg-' + getCategory(task.category)"
        >{{ getCategory(task.category) }}</span
      >
      <h4 class="task-item__title">{{ task.taskName }}</h4>
      <p class="task-item__desc">{{ task.taskDesc }}</p>
      <ul class="task-item__users">
        <li class="user"></li>
        <li class="user"></li>
      </ul>

      <!-- Task Action Dropdown -->
      <div
        class="dropdown task-item__action d-inline-block"
        :id="'dropdownRef' + task.id"
      >
        <button
          class="btn btn-link d-flex align-items-center justify-content-center"
          type="button"
          title="More Action"
          @click="openDropdown(task.id)"
        >
          <span class="icon icon-more_vert"></span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end border-0 shadow p-0"
          :ariaLabelledby="'dropdownMenuButton' + task.id"
          :class="{
            show: this.dropdownIndex == task.id && this.isShowDropdown,
          }"
        >
          <li>
            <a class="dropdown-item" href="#" @click="onEdit(task.id)"
              ><span class="icon icon-edit me-2"></span>Edit</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#" @click="onDelete(task.id)"
              ><span class="icon icon-delete me-2"></span>Delete</a
            >
          </li>
        </ul>
      </div>
      <!-- End: Task Action Dropdown -->
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import { Category } from "@/tasks/model/tasks.model";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_CARD_PRESENTATION,
  props: ["taskList", "columnId"],
  emits: ["taskListDetail", "deleteTask"],
  data() {
    return {
      taskData: new Array<any>(),
      dragElement: false,
      dropdownIndex: 0,
      isShowDropdown: false,
      dropdownRef: HTMLElement as any,
    };
  },
  created() {
    this.taskData = this.taskList;
  },
  mounted() {
    // Event listener for close the dropdown on outside click
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    // Event listener for close the dropdown on outside click
    document.removeEventListener("click", this.closeDropdown);
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

    // Get Task Category
    getCategory(value: number) {
      let name;
      switch (value) {
        case Category.Research:
          name = TaskConstants.TASK_CATEGORY[0].name;
          break;
        case Category.Planning:
          name = TaskConstants.TASK_CATEGORY[1].name;
          break;
        case Category.Design:
          name = TaskConstants.TASK_CATEGORY[2].name;
          break;
        case Category.Content:
          name = TaskConstants.TASK_CATEGORY[3].name;
          break;
      }
      return name;
    },

    // Open Dropdown
    openDropdown(index: any) {
      if (this.dropdownIndex == index && this.isShowDropdown) {
        this.isShowDropdown = false;
      } else {
        this.isShowDropdown = true;
      }
      this.dropdownIndex = index;
    },

    // Close Dropdown
    closeDropdown(e: any) {
      this.dropdownRef = document.getElementById(
        "dropdownRef" + this.dropdownIndex
      );
      if (!this.dropdownRef.contains(e.target)) {
        this.isShowDropdown = false;
      }
    },

    // Method called while edit task
    onEdit(taskId: any) {
      this.$router.push({
        name: TaskConstants.ROUTE.EDIT,
        params: { id: taskId },
      });
    },

    // Method called while click on delete
    onDelete(taskId: any) {
      this.$emit("deleteTask", taskId);
    }
  },
});
</script>
