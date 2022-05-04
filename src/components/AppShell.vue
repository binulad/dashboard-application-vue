<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <side-bar />
    <!-- End: Sidebar -->

    <!-- Main Content -->
    <main class="wrapper-content">
      <!-- Topbar -->
      <top-bar/>

      <!-- Main Content Area -->
      <div class="wrapper-content-main">
        <router-view />
      </div>
    </main>
    <!-- End: Main Content -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";

export default defineComponent({
  name: "AppShell",
  components: {
    SideBar,
    TopBar
  },
});
</script>
