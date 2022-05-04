<template>
  <!-- Confirmation Modal -->
  <teleport to="#modalWrapper">
    <div
      class="modal fade show d-block"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirmation Modal</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="onNoClick()"
            ></button>
          </div>
          <div class="modal-body">
            <p class="text-center mb-0">{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary px-4"
              data-bs-dismiss="modal"
              @click="onNoClick()"
            >
              No
            </button>
            <button type="button" class="btn btn-primary px-4" @click="onYesClick()">Yes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmationModal",
  emits: ["closeModal", "yesClick"],
  props: ["message"],
  setup(props, { emit }) {
    function onNoClick() {
      emit("closeModal");
    }
    function onYesClick() {
      emit("yesClick");
    }
    return {
      onNoClick,
      onYesClick,
      props
    };
  },
});
</script>
