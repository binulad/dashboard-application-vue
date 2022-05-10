<template>
  <!-- Task Form Area -->
  <div class="card border-0 h-100 shadow">
    <!-- Form -->
    <Form
      class="d-flex flex-column h-100 overflow-hidden"
      v-slot="{ errors }"
      :validation-schema="schema"
    >
      <div class="flex-grow-1 h-100 overflow-auto p-3">
        <div class="row">
          <!-- Task Name -->
          <div class="col-lg-4 mb-3">
            <label for="taskName" class="form-label">Task Name</label>
            <Field
              name="taskName"
              id="taskName"
              type="text"
              class="form-control"
              placeholder="Enter Task Name"
              :class="{ 'is-invalid': errors.taskName }"
              v-model="taskDetails.taskName"
            />
            <ErrorMessage
              name="taskName"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Task Name -->

          <!-- Status -->
          <div class="col-lg-4 mb-3">
            <label for="status" class="form-label">Status</label>
            <Field
              name="status"
              id="status"
              as="select"
              class="form-select"
              :class="{ 'is-invalid': errors.status }"
              v-model="taskDetails.status"
            >
              <option value="" selected>Select Status</option>
              <option
                v-for="item in taskStatus"
                :key="item.value"
                :value="item.value"
              >
                {{ item.name }}
              </option>
            </Field>
            <ErrorMessage
              name="status"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Status -->

          <!-- Task Description -->
          <div class="col-lg-12 mb-3">
            <label for="taskDesc" class="form-label">Task Description</label>
            <Field
              name="taskDesc"
              id="taskDesc"
              as="textarea"
              class="form-control"
              placeholder="Enter Task Description"
              :class="{ 'is-invalid': errors.taskDesc }"
              v-model="taskDetails.taskDesc"
            />
            <ErrorMessage
              name="taskDesc"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Task Description -->

          <!-- Category -->
          <div class="col-lg-4 mb-3">
            <label for="category" class="form-label">Category</label>
            <Field
              name="category"
              id="category"
              as="select"
              class="form-select"
              :class="{ 'is-invalid': errors.category }"
              v-model="taskDetails.category"
            >
              <option value="" selected>Select Category</option>
              <option
                v-for="item in taskCategory"
                :key="item.value"
                :value="item.value"
              >
                {{ item.name }}
              </option>
            </Field>
            <ErrorMessage
              name="category"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Category -->

          <!-- Assignee -->
          <div class="col-lg-4 mb-3">
            <label for="assignee" class="form-label">Assignee</label>
            <Field
              name="assignee"
              id="assignee"
              as="select"
              class="form-select"
              :class="{ 'is-invalid': errors.assignee }"
              v-model="taskDetails.assignee"
            >
              <option value="" selected>Select Assignee</option>
              <option
                v-for="user in userList"
                :key="user.name"
                :value="user.value"
              >
                {{ user.name }}
              </option>
            </Field>
            <ErrorMessage
              name="assignee"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Assignee -->

          <!-- Created By -->
          <div class="col-lg-4 mb-3">
            <label for="createdBy" class="form-label">Created By</label>
            <Field
              name="createdBy"
              id="createdBy"
              as="select"
              class="form-select"
              :class="{ 'is-invalid': errors.createdBy }"
              v-model="taskDetails.createdBy"
            >
              <option value="" selected>Select Created By</option>
              <option
                v-for="user in userList"
                :key="user.name"
                :value="user.value"
              >
                {{ user.name }}
              </option>
            </Field>
            <ErrorMessage
              name="createdBy"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Created By -->
        </div>
      </div>

      <!-- Form Action -->
      <div
        class="flex-shrink-0 d-flex align-items-center justify-content-between border-top p-3"
      >
        <button
          type="button"
          title="Cancel"
          class="btn btn-outline-secondary"
          @click="onCancel()"
        >
          Cancel
        </button>
        <button
          type="button"
          title="Save"
          class="btn btn-primary"
          @click="onSave()"
        >
          Save
        </button>
      </div>
      <!-- End: Form Action -->
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TaskConstants } from "@/tasks/constants";
import { Form, Field, ErrorMessage } from "vee-validate";
import { TaskAddUpdate } from "@/tasks/model/tasks.model";
import * as yup from "yup";

export default defineComponent({
  name: TaskConstants.NAME.TASKS_FORM_PRESENTATION,
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: ["taskData"],
  emits: ["saveTaskData"],
  data() {
    const schema = yup.object({
      taskName: yup
        .string()
        .required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
      taskDesc: yup
        .string()
        .required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
      status: yup.number().required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
      assignee: yup
        .string()
        .required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
      category: yup
        .string()
        .required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
      createdBy: yup
        .string()
        .required(TaskConstants.VALIDATION_MESSAGE.REQUIRED),
    });
    return {
      taskDetails: this.taskData,
      schema,
      taskStatus: TaskConstants.STATUS,
      taskCategory: TaskConstants.TASK_CATEGORY,
      userList: TaskConstants.USERS,
    };
  },
  methods: {
    // Method called when click on Cancel button
    onCancel() {
      this.$router.push({ name: TaskConstants.ROUTE.DEFAULT });
    },

    // Method called while get today's Date
    getDate() {
      const today = new Date();
      return today.getFullYear() +"-"+ (today.getMonth() + 1) +"-"+ today.getDate();
    },

    // Method called while click on Save button
    onSave() {
      this.taskDetails.createdDate = this.getDate();
      this.$emit("saveTaskData", this.taskDetails);
    },
  },
});
</script>
