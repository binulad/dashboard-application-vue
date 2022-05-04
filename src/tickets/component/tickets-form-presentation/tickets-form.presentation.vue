<template>
  <!-- Ticket Form Area -->
  <div class="card border-0 h-100 shadow">
    <!-- Form -->
    <Form
      class="d-flex flex-column h-100 overflow-hidden"
      v-slot="{ meta, errors }"
      :validation-schema="schema"
    >
      <div class="flex-grow-1 h-100 overflow-auto p-3">
        <div class="row">
          <!-- Ticket Subject -->
          <div class="col-lg-4 mb-3">
            <label for="ticketSubject" class="form-label">Ticket Subject</label>
            <Field
              name="subject"
              id="ticketSubject"
              type="text"
              class="form-control"
              placeholder="Enter Ticket Subject"
              v-model.trim="ticketDetails.subject"
              :class="{ 'is-invalid': errors.subject }"
            />
            <ErrorMessage
              name="subject"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Ticket Subject -->

          <!-- Assignee -->
          <div class="col-lg-4 mb-3">
            <label for="assignee" class="form-label">Assignee</label>
            <Field
              name="assignee"
              id="assignee"
              as="select"
              class="form-select"
              v-model.trim="ticketDetails.assignee"
              :class="{ 'is-invalid': errors.assignee }"
            >
              <option value="" selected>Select Assignee</option>
              <option
                v-for="user in userList"
                :key="user.value"
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

          <!-- Requested By -->
          <div class="col-lg-4 mb-3">
            <label for="requestedBy" class="form-label">Requested By</label>
            <Field
              name="requestedBy"
              id="requestedBy"
              as="select"
              class="form-select"
              v-model.trim="ticketDetails.requestedBy"
              :class="{ 'is-invalid': errors.requestedBy }"
              :disabled="!ticketDetails.assignee"
            >
              <option value="" selected>Select Requested By</option>
              <option
                v-for="user in userList"
                :key="user.value"
                :value="user.value"
                :disabled="user.value == ticketDetails.assignee"
              >
                {{ user.name }}
              </option>
            </Field>
            <ErrorMessage
              name="requestedBy"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Requested By -->

          <!-- Ticket Priority -->
          <div class="col-lg-4 mb-3">
            <label for="priority" class="form-label">Ticket Priority</label>
            <Field
              name="priority"
              id="priority"
              as="select"
              class="form-select"
              v-model.trim="ticketDetails.priority"
              :class="{ 'is-invalid': errors.priority }"
            >
              <option value="" selected>Select Ticket Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Field>
            <ErrorMessage
              name="priority"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Ticket Priority -->

          <!-- Ticket Status -->
          <div class="col-lg-4 mb-3">
            <label for="status" class="form-label">Ticket Status</label>
            <Field
              name="status"
              id="status"
              as="select"
              class="form-select"
              v-model.trim="ticketDetails.status"
              :class="{ 'is-invalid': errors.status }"
            >
              <option value="" selected>Select Ticket Status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </Field>
            <ErrorMessage
              name="status"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Ticket Status -->
        </div>
        <hr />
        <div class="row">
          <!-- Created Date -->
          <div class="col-lg-4 mb-3">
            <label for="createdDate" class="form-label">Created Date</label>
            <Field
              name="createdDate"
              id="createdDate"
              type="date"
              class="form-control"
              v-model.trim="ticketDetails.createdDate"
              :class="{ 'is-invalid': errors.createdDate }"
            />
            <ErrorMessage
              name="createdDate"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Created Date -->

          <!-- Due Date -->
          <div class="col-lg-4 mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <Field
              name="dueDate"
              id="dueDate"
              type="date"
              class="form-control"
              v-model.trim="ticketDetails.dueDate"
              :class="{ 'is-invalid': errors.dueDate }"
            />
            <ErrorMessage
              name="dueDate"
              as="div"
              class="invalid-feedback d-block"
            />
          </div>
          <!-- End: Due Date -->
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
          :disabled="!meta.valid"
          @click="onSave()"
        >
          Save
        </button>
      </div>
      <!-- End: Form Action -->
    </Form>
    <!-- End: Form -->
  </div>
  <!-- End: Ticket Form Area -->

  <!-- Confirmation Modal -->
  <confirmation-modal
    v-if="isShowConfirmation"
    :message="message"
    @closeModal="closeModal()"
    @yesClick="onYesClick()"
  ></confirmation-modal>
  <!-- Confirmation Modal -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TicketsConstants } from "@/tickets/constants";
import { Form, Field, ErrorMessage } from "vee-validate";
import { AddUpdateTickets } from "@/tickets/model/tickets.model";
import { TicketServices } from "@/tickets/services/tickets.service";
import * as yup from "yup";
import ConfirmationModal from "@/components/ConfirmationModal.vue";

export default defineComponent({
  name: TicketsConstants.NAME.TICKETS_FORM_PRESENTATION,
  components: {
    Form,
    Field,
    ErrorMessage,
    ConfirmationModal,
  },
  data() {
    const schema = yup.object({
      subject: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      assignee: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      requestedBy: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      priority: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      status: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      createdDate: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
      dueDate: yup
        .string()
        .required(TicketsConstants.VALIDATION_MESSAGE.REQUIRED),
    });
    return {
      ticketDetails: new AddUpdateTickets(),
      cloneTicketDetails: new AddUpdateTickets(),
      schema,
      isEdit: false,
      userList: [
        {
          name: "Heny",
          value: "heny",
        },
        {
          name: "Meera",
          value: "meera",
        },
        {
          name: "Riya",
          value: "riya",
        },
        {
          name: "Jisa",
          value: "jisa",
        },
        {
          name: "Jiya",
          value: "jiya",
        },
      ],
      isShowConfirmation: false,
      message: "",
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  async created() {
    if (this.id) {
      this.isEdit = true;
      await TicketServices.getTicketById(this.id).then((response) => {
        this.ticketDetails = response;
      });
    }

    this.cloneTicketDetails = JSON.parse(JSON.stringify(this.ticketDetails));
  },
  methods: {
    // Method called while click on "Cancel" button
    onCancel() {
      if (
        JSON.stringify(this.cloneTicketDetails) ==
        JSON.stringify(this.ticketDetails)
      ) {
        this.$router.push({ name: TicketsConstants.ROUTE.DEFAULT });
      } else {
        this.isShowConfirmation = true;
        this.message = TicketsConstants.CONFIRMATION_MESSAGE.DISCARD;
      }
    },
    // Method called while click on "Save" button
    onSave() {
      if (this.id) {
        TicketServices.updateTicketById(this.id, this.ticketDetails).then(
          () => {
            this.$router.push({ name: TicketsConstants.ROUTE.DEFAULT });
          }
        );
      } else {
        TicketServices.addUpdateTicket(this.ticketDetails).then(() => {
          this.$router.push({ name: TicketsConstants.ROUTE.DEFAULT });
        });
      }
    },

    // Method called while click on "No" in Confirmation Modal
    closeModal() {
      this.isShowConfirmation = false;
    },

    // Method called while click on "Yes" in Confirmation Modal
    onYesClick() {
      this.$router.push({ name: TicketsConstants.ROUTE.DEFAULT });
    },
  },
});
</script>
