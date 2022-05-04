<template>
  <div class="card border-0 h-100 shadow">
    <!-- Ticket List Presentation -->
    <div class="overflow-hidden d-flex flex-column flex-grow-1 py-3">
      <div class="overflow-auto rounded px-3">
        <div>Dashboard Data Container</div>
        <h2>{{ state.title }}</h2>
        <h5>{{ state.count }}</h5>

        <button type="button" class="btn btn-primary" @click="increment()">
          Increment
        </button>
        <button type="button" class="btn btn-primary mx-2" @click="decrement()">
          Decrement
        </button>

        <h4>Lifecycle hooks::</h4>
        <span>{{ state.text }}</span>

        <h4>Books Available::</h4>
        <span>{{ getAuthorStatus }}</span>

        <h4>Get Even Numbers from the Array:: {{ state.numbers }}</h4>
        <ul
          class="list-unstyled"
          v-for="(group, index) in state.numbers"
          :key="index"
        >
          <li v-for="number in evenNumbers(group)" :key="number">
            {{ number }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import { DashboardConstants } from "@/dashboard/constants";

export default defineComponent({
  name: DashboardConstants.NAME.DASHBOARD_DATA_CONTAINER,
  setup() {
    const state = ref({
      title: "Counter Value",
      count: 0,
      numbers: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      text: "",
    });

    const author = ref({
      name: "John",
      books: ["Book1", "Book2", "Book3"],
    });

    function increment() {
      state.value.count++;
    }
    function decrement() {
      state.value.count--;
    }

    function evenNumbers(numbers: any) {
      return numbers.filter((n: any) => n % 2 === 0);
    }

    onMounted(() => {
      state.value.text = "Mounted";
    });

    onUnmounted(() => {
      state.value.text = "UnMounted";
    });

    onUpdated(() => {
      console.log("On Updated");
    });

    // Computed Ref
    const getAuthorStatus = computed(() => {
      return author.value.books.length > 0 ? "Yes" : "No";
    });

    return {
      state,
      increment,
      decrement,
      getAuthorStatus,
      evenNumbers,
    };
  },
});
</script>
